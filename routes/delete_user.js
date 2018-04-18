const express = require('express');
const deleteUserController = require('./controller/delete-user-controller');

const router = express.Router();

router.get('/:id', deleteUserController.removeByIdandRedirect);


module.exports = router;