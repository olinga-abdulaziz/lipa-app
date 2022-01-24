const express=require('express')
const router=express.Router()
const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'})

const { token , stkpush,callback } = require('../Controllers/mpesaController')


router.post('/stk/push',token,stkpush)
router.post('/callback',(req,res)=>{
    res.send(req.body)
})




module.exports =router

