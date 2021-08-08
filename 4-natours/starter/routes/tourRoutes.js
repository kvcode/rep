const express = require('express');

const tourController = require('./../controllers/tourController');
const router = express.Router();

// Param Middleware - acess to 4 vars
router.param('id', tourController.checkId);

//hub
// Routers
router
  .route('/') // use the root / for the defines tourRouter address
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id') // root is the predefined adress and then the :id
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
