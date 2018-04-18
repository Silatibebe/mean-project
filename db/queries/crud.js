//create 
const createUser = (model, userObj) =>{
    newUser = new model(userObj);
   return newUser.save();
 }

 
// find all
const getAllUsers = (model) =>{
 
    return model.find({});
  }
  
  // find single 
  const getUserById = (_id, model) =>{
   
      return model.findById(_id);
    }

//remove single user
const getUserByIdandRemove = (_id, model) =>{
    return model.findByIdAndRemove(_id);
 }

// update single 
const UpdateUserById = (_id, model, update, options) =>{
    return model.findByIdAndUpdate(_id, update,options);
   }


const mongoCol = {
    
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById, 
    getUserByIdandRemove,
    UpdateUserById

}