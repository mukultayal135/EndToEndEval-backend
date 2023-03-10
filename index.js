const express = require('express');
const cors = require('cors');
const contentRouter = require('./src/routes/contentRouter');
const entryRouter = require('./src/routes/entryRouter');

const tokenValidation = require('./src/middlewares/tokenValidation');

const app = express();
const port = 8000;
app.use(cors());

app.use(tokenValidation.tokenValidation);
app.use(express.json());
app.use(contentRouter);
app.use(entryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
