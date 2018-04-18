const express = require('express');
const editController = require('./controller/edit-controller');
const router = express.Router();

//routes and controllers
router.get('/:id', editController.getUserforEditing);
router.post('/:id', editController.updateUserAndRedirect);

module.exports = router;