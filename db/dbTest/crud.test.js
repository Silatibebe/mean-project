const mocha = require('mocha');
const assert = require('assert');
const {testDbConnect, populateUser} = require('../dbTest/test_helper');
const {User} = require('../model/users');
// const {userCreateTestData} = require('../dbTest/create.test');
const {createUser,getAllUsers,getUserById,UpdateUserById,getUserByIdandRemove} = require('../queries/crud');
testDbConnect();
populateUser();


//User test suite
describe('User', () =>{
    //create user suite
    describe.only('create',() =>{
      it('creates a  user', (done) =>{
        const ben = {
            firstName: 'Ben',
            lastName: 'Melaku',
            email: 'ben@test.com',
            password: '1234'
        }
        User.remove({}).then(() =>{
            createUser(User, ben)
            .then(user =>{
                assert.deepStrictEqual(user.firstName === 'Ben');
                
            }).catch(e =>console.log(e));
       
        });
        done();
      });
    });

    //read user suite
    describe.only('read', ()=>{
        //all
        it.only('gets all users',(done) =>{
            getAllUsers(User).then((users) =>{
                console.log(users[1].firstName);
              assert.deepStrictEqual(users.length === 2);
             
               
            }).catch(e =>console.log(e));
          done();
        });

        //by id
        it('gets by id',(done)=>{
             //logic here
        });
    });

    //update user suite
    describe('update', ()=>{
      it('update by id', (done) =>{
         //logic here
      });
    });

    //delete user suite
    describe('delete', () =>{
      it('deletes all', (done) ={
          //logic here
      });
      //delete byid
      it('deletes byid', (done) ={
          //logic here
    });
    });
  
  
    });

  