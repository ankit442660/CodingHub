const errormiddleware=(err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message ||"Backend error";
    const extraDetails=err.extraDetails || "Error From backend";

    console.error(
        `[${req.method}]  ${req.path} >> StatusCode:: ${status}, Message:: ${extraDetails} `
      );
    
      return res.status(status).json({ message, extraDetails });
}

module.exports=errormiddleware;