const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owners-model");


if(process.env.NODE_ENV === "development"){
    router.post("/create", async (req,res)=>{
        let owners =  await ownerModel.find();
        if(owners.length > 0) return res.status(503).send("You don't have the permissions");

        let {fullname, email, password} = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        })

        res.status(201).send(createdOwner);
    })
};
router.get("/", (req,res)=>{
    res.send("hey!!");
});


module.exports = router;