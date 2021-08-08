const fs = require('fs')
const express = require('express')
const { formatWithOptions } = require('util')

const app = express()

// to use middleware
app.use(express.json())

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Hello from the server side!',
//     app: 'natours',
//   })
// })

// app.post('/', (req, res) => {
//   res.send('you can post to this endpoint...')
// })

// do not read data in route handler
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

//spec demain and always its version
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      // name of endpoint is tourse and : tours is the name of the var that has the info
      // tours: tours
      tours,
    },
  })
})

app.get('/api/v1/tours/:id/', (req, res) => {
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
})

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body)

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
      // once file is written send the newly created object
      res
        .status(201) //created new resoursce 201 status
        .json({
          status: 'success',
          data: {
            tour: newTour,
          },
        })
    }
  )

  // DONT SEND RESPONSE TWICE
  // res.send('done')
})

// putting for the entire object
//patching to update properties - its easier
app.patch('/api/v1/tours/:id', (req, res) => {
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
})

// Deleteting requests
app.delete('/api/v1/tours/:id', (req, res) => {
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
})

const port = 3000

app.listen(port, () => {
  console.log(`app runs on port ${port}`)
})
