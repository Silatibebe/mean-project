const mongoose = require('mongoose');
const {User} = require('../model/users'); 

//setup
const testDbConnect = () =>{
    mongoose.connect('mongodb://localhost:27017/mean-projectTestDb');
   const conn = mongoose.connection;
  
        conn.once('open', () =>{
            console.log('testDb connected..!!');
           });          
        
        conn.on('error', () =>{
            console.log('unable to connect to the test db....!!');
        });   
}

//populatUser
const populateUser = (done) =>{
    //root level async hook
beforeEach((done) =>{
    console.log('.....before each !!!');
   
        const userTestData = {
            firstName: 'Ephi3',
            lastName: 'Melaku',
            email: 'bela@test.com',
            password: '1234'
        }
        
        User.remove({}).then(() =>{
            const newUser = new User(userTestData);
            console.log('removed all user docs ....a statment form test-helper.')
             newUser.save().then((user) =>{
                 console.log('a populate the db....')
                console.log(user);
                
             });
        });
    
   
    done();

});
}

module.exports = {testDbConnect, populateUser};


