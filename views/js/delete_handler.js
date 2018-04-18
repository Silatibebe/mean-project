const {User} = require('../../db/model/users');
const {} = require('mongodb');
const {getUserByIdandRemove} = require('../../db/queries/crud');
const delete_handler = (_id) =>{
  getUserByIdandRemove(_id, User).then( user =>{
      alert(`${user.firstName} deleted!!!`);
  })
}