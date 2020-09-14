const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');

//Route files
const bootcamps = require('./routes/bootcamps');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT;

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// app.get('/api/v1/bootcamps', (req, res) => {
//   res.status(200).json({ success: true, msg: 'Show all bootcamps' });
// });

app.use('/api/v1/bootcamps', bootcamps);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
