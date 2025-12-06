const mongoose = require ('mongoose');

const dbConnection = async ()=>{
    try{
    const conn = await mongoose.connect('mongodb://localhost:27017/ecom');
    console.log(`Db connection extablished `);
    }
    catch(error){
        console.log(`Error Connecting to MongoDB ${error}`);
        process.exit(1);
    }
}

module.exports = 
    dbConnection
