const express = require('express');
const {User} = require('../db/model/users');
const {getUserById,UpdateUserById} = require('../db/queries/crud');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('update_user');
});