const mongoose = require('mongoose');
const DB = process.env.DB;

const mongoDB = async() => {
    try{
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(` 2 : Established connection with mongo database`);
    } catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = mongoDB;