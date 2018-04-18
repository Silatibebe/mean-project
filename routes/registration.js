const express = require('express');
const {User} = require('../db/model/users');
const {createUser} = require('../db/queries/crud');
const router = express.Router();


router.get('/', (req, res, next) =>{
   
     res.render('registration');

});

router.post('/', (req, res, next) =>{
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };
    createUser(User, newUser).then(user =>{
        res.redirect('../');
    });
  
});
module.exports = router;