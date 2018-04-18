const mongoose = require('mongoose');

const dbConnect = () =>{
    mongoose.connect('mongodb://localhost:27017/mean-projectDb')
     .then(() =>{
         console.log('Db connected..!!')
     })
     .catch(() =>console.log('unable to connect to the db....!!'));
 }
module.exports = {dbConnect};