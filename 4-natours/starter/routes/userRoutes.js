const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

// Routers
router
  .route('/') // use the root / for the defines tourRouter address
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser) // just a comment to manipulate prettier
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
