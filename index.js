const express = require('express');
const contentRouter = require('./src/routes/contentRouter');
const tokenValidation = require('./src/middlewares/tokenValidation');

const app = express();
const port = 8000;

app.use(tokenValidation.tokenValidation);
app.use(express.json());
app.use(contentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
