exports.index = function(request,response){
	//console.log(users.getUsers());
    response.render('index',{
                title: "Home"
            });
}