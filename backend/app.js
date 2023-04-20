require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const app = express();

const port = process.env.PORT ?? 3000;

config(app);

app.listen(port, () => {
  console.log('vse horosho', port);
});
