const Service=require('../models/service-model');


const services= async(req,res)=>{
    

    try{
        const response=await Service.find();
        if(!response){
            res.status(404).json({msg:"No Service found"});
        }
        res.status(200).json({response});

    }catch(err){
        console.log('service',err);

    }
};
module.exports=services;