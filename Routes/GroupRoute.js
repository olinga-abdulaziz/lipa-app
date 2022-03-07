const express=require('express')
const router=express.Router()
const dotenv=require('dotenv')
const Group = require('../Models/Group')

//adding new group
router.post('/add',async(req,res)=>{
    const group=new Group({
        group:req.body.group,
        groupId:req.body.groupId,
        groupSecrete:req.body.groupSecrete,
        description:req.body.description,
        admin:req.body.admin
    })

    try {
        const saveGroup=await group.save()
        res.send("Group added succesffully")
    } catch (err) {
        console.log(err);
    }
})

// get all groups
router.get('/all',async(req,res)=>{
    try {
        const groups=await Group.find()
        res.send(groups)
    } catch (err) {
        console.log(err);
    }
})

module.exports=router