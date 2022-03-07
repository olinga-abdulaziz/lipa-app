const express=require('express')
const router=express.Router()
const dotenv=require('dotenv')
const Member= require('../Models/Member')
dotenv.config()

// regestering member
router.post('/member/register', async(req,res)=>{
    const member=new Member({
        fullnames:req.body.fullnames,
        phone:req.body.phone,
        email:req.body.email,
        group:req.body.group,
        groupId:req.body.groupId,
        number:req.body.number,
        verify:req.body.verify,
    })

    try {
        const saveMember=await member.save()
        res.send('registered successfully')
    } catch (err) {
        console.log(err);
    }
})

// get all members in the app
router.get('/member',async(req,res)=>{
    try {
        const members=await Member.find()
        res.send(members)
    } catch (err) {
        console.log(err);
    }
})


// get grouped members
router.get('/member/grouped/:groupId',async(req,res)=>{
    try {
        const members=await Member.find({groupId:req.params.groupId})
        res.send(members)
    } catch (err) {
        console.log(err);
    }
})

// get single member
router.get('/member/single/:email',async(req,res)=>{
    try {
        const member=await Member.find({email:req.params.email})
        res.send(member)
    } catch (err) {
        console.log(err);
    }
})







module.exports =router

