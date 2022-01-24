const express=require('express')
const router=express.Router()
const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'})

const { token , stkpush } = require('../Controllers/mpesaController')

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/mpesa',token,stkpush)





module.exports =router

