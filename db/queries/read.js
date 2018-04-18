
// find all
const getAllUsers = (model) =>{
 
  return model.find({});
}

// find single 
const getUserById = (_id, model) =>{
 
    return model.findById(_id);
  }

const filteredGetUser = (model,filterkey,filterVal) =>{
   return model.find(criteria).where(filterkey,filterVal);// can also be chained like where.().where().exec(callback)
}
module.exports = {getAllUsers, getUserById, filteredGet};
