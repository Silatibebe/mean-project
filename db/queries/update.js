
// update single 
const UpdateUserById = (_id, model, update, options) =>{
 return model.findByIdAndUpdate(_id, update,options);
}

module.exports = {UpdateUserById};