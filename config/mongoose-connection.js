const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose.
connect(`${config.get("MONGODB_URI")}/scatch-ecommerce`)
.then(function(){
    dbgr("DB connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;
