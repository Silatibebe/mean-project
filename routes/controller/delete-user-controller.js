const {User} = require('../../db/model/users');
const crud = require('../../db/queries/crud');

const controller = {

    //get user by id remove and redirect
    removeByIdandRedirect:(req, res, next) =>{
        const id = req.params.id;
        crud.getUserByIdandRemove(id, User).then(user =>{
            res.redirect('../');
        });        
    }
    
}


module.exports = controller;