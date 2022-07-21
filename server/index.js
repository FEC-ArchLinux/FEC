/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(express.json());
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/public')));

const port = 3000;
app.listen(port);
console.log(`listening at localhost : ${port}`);
