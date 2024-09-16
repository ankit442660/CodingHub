const mongoose=require('mongoose');


// const URI="mongodb://127.0.0.1:27017/" 
//mongodb+srv://ankit-4426_jha:nodejs123@atlascluster.q1r2bk9.mongodb.net/ankit-4426_jha?retryWrites=true&w=majority&appName=AtlasCluster;

 const URI=process.env.MONGODB_URI;
const connectDb= async()=>{
    try{

        await mongoose.connect(URI);
        console.log("connection successful to DB");
    }catch(error){

        console.log("database connection failed");
        process.exit(0);

    }
};

module.exports=connectDb;