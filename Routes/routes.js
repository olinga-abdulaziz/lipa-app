const express=require('express')
const router=express.Router()
const dotenv=require('dotenv')
dotenv.config()

router.get('/',(req,res)=>{
    res.send("hello world")
})


module.exports =router

