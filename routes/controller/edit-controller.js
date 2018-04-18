const {User} = require('../../db/model/users');
const crud = require('../../db/queries/crud');

const controller = {

    //get user for editing
    getUserforEditing: (req, res, next) =>{
        const _id = req.params.id;
        
        crud.getUserById(_id, User).then(user =>{
            res.render('edit',{user: user});
            console.log('success get by id---2')
           return _id;
        }).catch(e =>console.log(e));
    },
    updateUserAndRedirect:(req, res, next) =>{
        
        const update = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        };
       
        crud.UpdateUserById(req.params.id,User,{$set:update},{new:true})
        .then(user =>{
            res.redirect('../');
        }); 
    }

}


module.exports = controller;