const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Use Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Use middleware with next middleware "next" as third paramater
// ALWAYS CALL NEXT() in all middlewares!!!
// These middlewares reply to every request
app.use((req, res, next) => {
  console.log('hi from the middleware');
  req.requestTime = new Date().toISOString();
  next();
});

// Routing - Mounting the routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
