const mongoose = require('mongoose');
async function main(){
    await mongoose.connect(process.env.MONGOURL);
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));


