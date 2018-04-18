
//remove single user
const getUserByIdandRemove = (_id, model) =>{
   return model.findByIdAndRemove(_id);
}

module.exports = {getUserByIdandRemove};