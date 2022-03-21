const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://rootdb:rootdb@cluster0.totbj.mongodb.net/eccomdb?retryWrites=true&w=majority').
then((result)=>{
    console.log('Establish connection with e-commerce database');
}).catch((error)=>{
    console.log('cannot connect with database for some resions');
})

module.exports = mongoose.connection;