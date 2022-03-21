exports.isAuthenticate = (req,res,next)=>{
    if(req.session.CurrentUser){
        next();
    }else{
        res.redirect('/sign-in');
    }
}