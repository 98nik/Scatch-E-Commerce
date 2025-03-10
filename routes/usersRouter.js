const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");

router.get("/", (req,res)=>{
    res.render("index");
})

router.post("/register", async (req,res)=>{
    try{
        let {email, fullname, password} = req.body;

    await userModel.create({
        email,
        password,
        fullname,
    })
    res.send(user);

    }
    catch(err){
        console.log(err.message);
    }

});
module.exports = router;