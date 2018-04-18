const express = require('express');
const {User} = require('../db/model/users');
const {createUser} = require('../db/queries/crud');
const router = express.Router();

router.get('/', (req, res, next) =>{
 
     res.render('new_user');
      
});

module.exports = router;