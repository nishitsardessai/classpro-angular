var userModel= require('../models/Users');


exports.getAllUser = function(req, res) {
    userModel.find(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}

exports.postCreateUser= function(req,res){
    var user = new userModel();
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;
    user.save();
    res.json(user);
}
exports.putUpdateUser= function(req,res){
    userModel.findById(
        req.params.id,
        function(err, user) {
        if (err)
        {    
            res.send(err);
        }
        user.name = req.body.name;
        //user.username = req.body.username;
        //user.password = req.body.password;
        user.save(function(err){
            if(err)
                res.send(err);
            res.json({
                message: 'Successfully updated user'
            });
            
        });
        
    });
    
}

exports.deleteUser = function(req, res) {
    userModel.remove({
        _id: req.params.id
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Successfully deleted user'
        });
    });
}

exports.createUser = function(req,res){
    res.render('create');
}

exports.postNewUser= function(req,res){
    var user = new userModel();
    user.name = req.body.name;
    user.username = req.body.username;
    user.password = req.body.password;
    user.save();
    res.send(req.body.name+" "+req.body.username+" "+ req.body.password +' done');
    
}

exports.getUserById = function(req,res){
    userModel.findById(req.params.id,function(err,user){
        if(err)
            res.send(err);
        res.json(user);
    
    });
}


exports.deleteUserByName = function(req, res) {
    userModel.remove({
        name: req.params.name
    }, function(err, user) {
        if (err)
        {    
            res.send(err);
        }
        res.json({
            message: 'Successfully deleted user',
            user : user
        });
    });
}

















