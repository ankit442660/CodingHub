const User=require("../models/user-model")
const Contact=require("../models/contact-model")

// ****get all users data which has done our registraion
const getAllUsers= async(req,res)=>{
    
    try{
         const users=await User.find({}).select({
            password:0,

         })
        // const users=req.user;
        // console.log(users.length);
        if(!users || users.length===0){
            return res.status(404).json({message:"No user found"});

        }
        return res.status(200).json(users);

    }catch(err){
        next(err);
    }

}

// ****get all contact which has filled the contact form. this is the get contact 
// section****

const getAllContact=async(req,res)=>{
    try{
        const contact= await Contact.find({});
        // console.log(contacts);
        if(!contact || contact.length===0){
           return res.status(404).json({message:"Data Not Found"});
        }
       return res.status(200).json(contact);
    }catch(err){
        next(err);
    }
}

//delete by admin

const deleteUserById = async (req,res)=>{
    try{
        const id=req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"});

    }catch(err){
        next(err);
    }

};

const deleteContactById= async(req,res)=>{
    try{
        const id=req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact Deleted Successfully"});

    }catch(err){
        next(err);
    }
}

//user Update functionality

const updateUserById=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const updateUserData=req.body;
        const updatedData= await User.updateOne({_id:id},{
            $set:updateUserData,
        });

       return res.status(200).json(updatedData);



    }catch(error){
        next(error);

    }

}



//get single user data functionality

const getUsersById=async(req,res)=>{
    try{
    const id=req.params.id;
      const data=  await User.findOne({_id:id},{password:0});
      return res.status(200).json(data);


    }catch(err){
        console.log(err);
    }

}

module.exports={getAllUsers ,getAllContact,deleteUserById,deleteContactById,getUsersById,updateUserById};