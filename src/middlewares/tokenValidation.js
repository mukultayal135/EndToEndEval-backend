const axios = require('axios');
const Joi = require('joi');
const HTTPError = require('../errors/HTTPError');

const tokenSchema = Joi.object({
  token: Joi.string().required(),
});
const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const { error } = tokenSchema.validate();
    if (error) throw new HTTPError(400, error.details[0].message);
    const verifyToken = await axios.post(
      'http://localhost:4000/token/validate',
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    req.user = verifyToken.data.user;
    next();
  } catch (err) {
    if (err instanceof HTTPError) {
      res.status(err.code).json({ message: err.message });
    } else {
      res.status(401).json({ message: 'Token Invalid' });
    }
  }
};
module.exports = { tokenValidation };
