const express = require('express');
const {User} = require('../db/model/users');
const {getAllUsers,UpdateUserById} = require('../db/queries/crud');
const router = express.Router();

router.get('/', (req, res, next) =>{
  
      getAllUsers(User).then( users =>{
        res.render('index',{users:users});  
        
      }).catch(e =>console.log(e));
  
});

module.exports = router;