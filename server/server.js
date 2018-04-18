const express = require('express');
const path = require('path');
const pug = require('pug');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
const {dbConnect} = require('../db/connection/appDb');
dbConnect();

//bodyParser
app.use(bodyParser.json());// can also use express.json()
app.use(bodyParser.urlencoded({extended: false})); // can also use express.urlencoded()

//application setting to use ../views folder for pug files as view engine
app.set('views', '../views');
app.set('view engine', 'pug');


//routes
const index = require('../routes/index');
// const login = require('../routes/login');
const registration = require('../routes/registration');
const edit = require('../routes/edit');
const delete_user = require('../routes/delete_user');
// const new_user = require('../routes/new_user');
// const update_user = require('../routes/update_user');


app.use('/', index);
app.use('/edit', edit);
// app.use('/edit/:id', edit);
app.use('/registration', registration);
// app.use('/new_user', new_user);
// app.use('/edit', edit);
app.use('/delete_user', delete_user);
// app.use('/update', update_user)

// app.get('/',(req, res, next) =>{
//     res.render('index');
// });
// app.use('/static', express.static(__dirname, '/public'));
//listen
app.listen(port, () =>{
    console.log(`server is listening ar port ${port}`);
});
