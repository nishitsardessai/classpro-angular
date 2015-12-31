var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//Controllers
var homeController = require('./controllers/home');
var usersController = require('./controllers/users');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
                {
                    extended: false 
                }));

app.use(express.static('public'));
//Mongoose
mongoose.connect('mongodb://localhost:27017/classpro');
mongoose.connection.on('error', function(){
    console.error('MongoDb is not connected. Cheeck if mongod is running');
});

//Routes
//Get rquest to get all users
app.get('/api/users', usersController.getAllUser);
//Get request to get user by id
app.get('/api/users/:id', usersController.getUserById);
//Post Request to create new user
app.post('/api/users',usersController.postCreateUser);
//Post Request to update a user by id
app.put('/api/users/:id',usersController.putUpdateUser);
//Delete User by id
app.delete('/api/users/:id',usersController.deleteUser);


//app.get('/', homeController.index);
//  app.del('/users',usersController.delUser);
//app.get('/users/:id', usersController.getUserById);
//app.get('/users/del/:id', usersController.deleteUser);
//app.get('/users/delbyname/:name', usersController.deleteUserByName);
//
//app.get('/adduser',usersController.createUser);
//app.post('/adduser',usersController.postNewUser);

app.listen(3000);
    