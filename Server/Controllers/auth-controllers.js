const bcryptjs = require("bcryptjs");
const User = require("../models/user-model");
const nodemailer=require("nodemailer");
const { verify } = require("jsonwebtoken");

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router"
      );
  } catch (error) {
    console.log(error);
  }
};

//for send mail
const sendVerifyMail=async(name,email,user_id)=>{
  try{
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure:false,
      requireTLS:true,
      auth: {
          user: 'kumarjhaa366@gmail.com',
          pass: 'watmlwamwatfxqnt'
      }
  });
   const mailOptions={
      from:'kumarjhaa366@gmail.com',
      to:email,
      subject:'for verification mail',
      html:'<h2">Hii '+name+' ,please click here to  <a href="https://coding-hub-backend.vercel.app/api/auth/verify?id='+user_id+'" >  verify  </a>  your mail.</h2>',
   }
   transporter.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error);
    }
    else{
      console.log(`Email has been send ${info.response}`);

    }
   })

  }catch(err){
    console.log(err);

  }
}

const register = async (req, res,next) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;
  
    const userExist = await User.findOne({ email });
    if (userExist) {

        return res.status(400).json({message:"Email already exist"});

    }

   


    

    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcryptjs.hash(password, saltRound);
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    if(userCreated){
     sendVerifyMail(req.body.username,req.body.email,userCreated._id);
    }

    res
      .status(200)
      .json({
        msg:"registration successful",
        data: userCreated,
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};
//User Login 

const login= async (req,res,next)=>{
  try{
    const {email,password}=req.body;

    const userExist=await User.findOne({email});
    

    if(!userExist){
      return res.status(400).json({message : "Inavlid Email"})
    }
    const user=await userExist.comparePassword(password);
    // bcryptjs.compare(password,userExist.password);

    if(user){
      res
      .status(200)
      .json({
        msg:"Login Successful",
        data: userExist,
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });

    }
    else{
       res.status(401).json({message: "invalid  password"});
    //   const status=401;
    //   const message="invalid password";
      
    //   const error={
    //     status,
    //     message,
        
    //   }
    //   next(error);
    }
  }
  catch(error){
    next(error)
  }
};


//to send user data -User Logic

const user= async (req,res)=>{
  try{
    const userData=req.user;
    // console.log(userData);
    return res.status(200).json({userData});



  }catch(error){
    console.log(`error form the user router ${error}`);

  }

}

const verifyMail=async(req,res)=>{
  try{
const updateInfo=  await  User.updateOne({_id:req.query.id},{ $set :{isVerification:true}});
console.log(updateInfo);
return res.status(200).send("Email Verified");

  }catch(err){
    console.log(err);
  }
}





module.exports = { home, register ,login ,user,verifyMail};
