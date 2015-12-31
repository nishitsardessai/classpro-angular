var userModel = require('../models/Users');

var getUser = function(id) {
    for(var i=0; i < userModel.users.length; i++) {
        if(userModel.users[i].id == id) 
            return userModel.users[i];
    }
}

var compareAuth= function(username, password){
    for(var i= 0; i< userModel.users.length; i++)
    {
        if(userModel.users[i].username == username && userModel.users[i].password == password)
        {
            return userModel.users[i];
            //return true;
        }
    }
    
    return false;

}


exports.getUserById = function(request,response){
var user = getUser(request.params.id);
    response.render('profile',{
                title: "User Profile",                             user: user
            });
}

exports.getSignUp = function(request,response){
	 response.render('signup',{
                title: "SignUp"
            });
}

exports.getLogin =  function(request,response){
    
	 response.render('login',{
                title: "Login"
            });
}

exports.getUsers = function() {
    return userModel.users;
}

exports.postLogin = function(request, response){
    var result = compareAuth(request.body.email, request.body.password);  
    if(result)
   {
    response.send("Login Successful. Hi "+result.name);
 
   }
    else
    {
        response.send("Failed");
    }
}






















