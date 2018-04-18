const express = require('express');
const {User} = require('../db/model/users');
const {getUserById} = require('../db/queries/crud');
const router = express.Router();


router.get('/', (req, res, next) =>{
  
      // getUserById(_id,User).then( user =>{
      //   res.render('index',{user:user});  
       
      // });
      res.send('hello from login');
     
});

module.exports = router;