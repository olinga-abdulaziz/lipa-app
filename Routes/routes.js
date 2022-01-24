const express=require('express')
const router=express.Router()
const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'})

const { token , stkpush } = require('../Controllers/mpesaController')

router.get('/',(req,res)=>{
    res.send('first page')
})

router.get('/mpesa',token,stkpush)





module.exports =router

