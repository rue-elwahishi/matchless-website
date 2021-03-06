const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./config/db');

//Load env vars
dotenv.config({path: './config/config.env'});

const  app = express();

//json parser
app.use(express.json());

//connectDb
connectDb();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//handle unhandled promise rejections
process.on('unhandledrejection', (err, promise) => {
    console.log(`Error ${err.message}`);
    //close Server and exit
    server.close(() => process.exit(1))
});






