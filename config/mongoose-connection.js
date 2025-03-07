const mongoose = require('mongoose');

mongoose.
connect('mongodb://localhost:27017/scatch-ecommerce')
.then(function(){
    console.log("DB connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;
