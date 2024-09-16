const { z } =require('zod');

//create an object schema
const signupSchema =z.object({
    
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message: "Name must be at least of 3 chars."})
    .max(255,{message:"Name must can't more than 255 characters"}),

    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message: "email must be at least of 3 chars."})
    .max(255,{message:"email can't be more than 255 characters"}),

    phone: z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message: "phone must be at least of 10 chars."})
    .max(20,{message:"phone can't be more than 20 characters"}),

    password: z
    .string({required_error:"password is required"})
    .min(7,{message: "password must be at least of 7 chars."})
    .max(255,{message:"password can't be more than 255 characters"}),

});

const loginSchema= z.object({
    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message: "email must be at least of 3 chars."})
    .max(255,{message:"email can't be more than 255 characters"}),

    password: z
    .string({required_error:"password is required"})
    .min(7,{message: "password must be at least of 7 chars."})
    .max(255,{message:"password can't be more than 255 characters"}),

})
module.exports={signupSchema, loginSchema};