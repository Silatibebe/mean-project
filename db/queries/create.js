
//create 
const createUser = (model, userObj) =>{
   newUser = new model(userObj);
  return newUser.save();
}
module.exports = createUser;


