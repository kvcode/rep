const fs = require('fs')
const express = require('express')
const { formatWithOptions } = require('util')

const app = express()

// to use middleware
app.use(express.json())

// do not read data in route handler
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

//spec dоmain and always its version
// Handle Get request for All Tours and return JSON with all tours

// Define a function to call when handling the GET ALL TOURS request
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      // name of endpoint is tours and : tours is the name of the var that has the info
      // so because are equal shor writing of tours: tours is just tours,
      tours,
    },
  })
}

// Define a function to call when handling the GET TOUR request
const getTour = (req, res) => {
  console.log(req.params)
  const id = req.params.id * 1

  if (id > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid Id',
    })
  }

  const tour = tours.find((el) => el.id === id)

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  })
}

// Defina a function to handle the POST - Create Tour
const createTour = (req, res) => {
  console.log(req.body)
  // take the id from last obj and add 1

  const newId = tours[tours.length - 1].id + 1
  const newTour = Object.assign(
    {
      id: newId,
    },
    req.body
  )

  tours.push(newTour)

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
        })
    }
  )
}

// Define function to patch/update tour
const updateTour = (req, res) => {
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID on patch',
    })
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<UPDATED TOUR HERE...>',
    },
  })
}

// Define function for deleting tour
const deleteTour = (req, res) => {
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID on patch',
    })
  }
  res.status(204).json({
    status: 'success',
    data: null,
  })
}

const port = 3000

// Start the server/listening for requests
app.listen(port, () => {
  console.log(`app runs on port ${port}`)
})

// OLD ROUTE HANDLING with many lines
// // Handle the GET Method and Call the Function
// app.get('/api/v1/tours', getAllTours)
// // Handle Get request for a single tour by the id
// app.get('/api/v1/tours/:id/', getTour)
// // Handle POST request to create New Tour
// app.post('/api/v1/tours', createTour)
// // Handle PATCH req to update properties - its easier
// app.patch('/api/v1/tours/:id', updateTour)
// // Handly Deleteting requests
// app.delete('/api/v1/tours/:id', deleteTour)

// BETTER ROUTE HANDLING with only two lines
app.route('/api/v1/tours').get(getAllTours).post(createTour)

app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)
