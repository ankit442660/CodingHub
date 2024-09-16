


const adminMiddleware=(req,res,next)=>{
    try{
        const isadmin=req.user.isAdmin;
        if(!isadmin){
            res.status(403).json({message : "Access denied ,User is not an admin"});
        }
        next();




    }catch(err){
        console.log(err);
    }
}
module.exports=adminMiddleware;