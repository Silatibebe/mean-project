const {testDbConnect} = require('../dbTest/test_helper');
const {User} = require('../model/users');
const {getAllUsers, getUserById} = require('../queries/crud');

testDbConnect();
//getAllUsers
getAllUsers(User).then((users) =>console.log(users))
.catch((e) =>console.log(e));

//getUserById
getUserById('5ac31e7bd98feb1468964ff1', User).then((user) =>console.log(user))
.catch((e) =>console.log(e));