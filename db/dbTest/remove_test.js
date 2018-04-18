const {testDbConnect} = require('../dbTest/test_helper');
const {User} = require('../model/users');
const {getUserByIdandRemove} = require('../queries/crud');
testDbConnect();
getUserByIdandRemove('5ac31e0ce1c58511b0b6b987', User)
.then(user =>console.log(user));



