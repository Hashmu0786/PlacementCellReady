const developement = {
    name :'developement',
    db_path :'./config/mongoose',
    passport_path : './config/passport-local-strategy',
    customMware_path : './config/flashMessage',
    assets_path : './assets',
    secret_key :process.env.SECERTKEY,
    mongoose_path :process.env.MONGOURL,
    api_path :'https://remotive.com/api/remote-jobs'
}
module.exports = developement;


// mongodb+srv://hasmuddin97175:Ct9AhtBzrj3EWaAj@cluster0.zpz0hmn.mongodb.net/?retryWrites=true&w=majority