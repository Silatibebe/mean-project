const {User} = require('../model/users');
const {UpdateUserById} = require('../queries/crud');
const {testDbConnect} = require('../dbTest/test_helper');
testDbConnect();
const update = {
    $set: {firstName: 'Merry2'}
};

const options = {new: true};
const _id = '5ac31e7bd98feb1468964ff1';

//update a single user
UpdateUserById(_id, User, update, options)
.then(user =>console.log(user))
.catch(e =>console.log(e));