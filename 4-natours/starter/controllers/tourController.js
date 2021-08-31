const fs = require('fs');

// Do not read data in route handler !!!
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkId = (req, res, next, val) => {
  console.log(`Tour id is ${val}`);

  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

// HANDLERS
// Handle Get request for All Tours and return JSON with all tours
// Define a function to call when handling the GET ALL TOURS request
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    results: tours.length,
    requestedAt: req.requestTime,
    data: {
      // name of endpoint is tours and : tours is the name of the var that has the info
      // so because are equal shor writing of tours: tours is just tours,
      tours,
    },
  });
};

// Define a function to call when handling the GET TOUR request
exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

// Defina a function to handle the POST - Create Tour
exports.createTour = (req, res) => {
  console.log(req.body);
  // take the id from last obj and add 1
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign(
    {
      id: newId,
    },
    req.body
  );

  tours.push(newTour);

  // do not block event loop !! all must be aSync !!
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      // once file is written - send the newly created object as a response
      res
        .status(201) //means created new resoursce 201 status
        .json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
    }
  );
};

// Define function to patch/update tour
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<UPDATED TOUR HERE...>',
    },
  });
};

// Define function for deleting tour
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
