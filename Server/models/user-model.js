
const mongoose=require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt=require("jsonwebtoken")

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        reuired:true,
    },
    email:{
        type:String,
        reuired:true,
    },
    phone:{
        type:String,
        reuired:true,
    },
    
    password:{
        type: String,
        required:true,
    },
    isAdmin:{
       type: Boolean,
       default: false, 
    },
    isVerification:{
        type: Boolean,
        default: false, 
     },
});


//secure the password
userSchema.pre('save',async function(next){
    // console.log('pre Method',this);

    
    const user=this;

    if(!user.isModified('password')){
        next();
    }
    try{
    const saltRound = await bcryptjs.genSalt(10);
    const hash_password = await bcryptjs.hash(user.password, saltRound);
    user.password=hash_password;
    }catch(error){
        next(error);

    }

})
//json web token
userSchema.methods.generateToken= async function (){
    try{
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn : "30d",
        }
    );

    }catch(error){
        console.error(error);
    }

}

userSchema.methods.comparePassword=async function(password){
    return bcryptjs.compare(password,this.password);
}


const User=new mongoose.model('User',userSchema);

module.exports=User;