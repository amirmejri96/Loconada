const mongoose = require('mongoose')


const db = async()=>{
    try{
        await mongoose.connect('mongodb+srv://amirmejri1996:Z8tZ94KfmdAh8aXP@cluster0.ia7k7.mongodb.net/'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        console.log('MongoDB connected successfuly')

    } catch(err){
        console.log(err)
    }
}

module.exports = db