exports.isAuthenticate = (req,res,next)=>{
    if(req.session.CurrentAdminId){
        next();
    }else{
        res.redirect('/admin/');
    }
}