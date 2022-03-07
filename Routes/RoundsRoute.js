const express=require('express')
const mongoose=require('mongoose')
const Round=require('../Models/Round')
const router=express.Router()


//adding new round
router.post('/round',async(req,res)=>{
    const round=new Round({
        Round:req.body.Round,
        Members:req.body.Members,
        groupId:req.body.groupId
    })
    try {
        const saveRound=await round.save()
        res.send('Round added successfully')
    } catch (err) {
        console.log(err);
    }
})

//get all round
router.get('round/:groupId',async(req,res)=>{
    try {
        const rounds=await Round.find({groupId:req.params.groupId})
        res.send(rounds)
    } catch (err) {
        console.log(err);
    }
})







module.exports=router