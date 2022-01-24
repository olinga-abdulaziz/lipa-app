const express=require('express')
const router=require('./Routes/routes')
const mpesa=require('./Routes/mpesa')
const dotenv=require('dotenv')
const ejs=require('ejs')

const app=express()

dotenv.config({path:'./config/config.env'})

app.set('view engine','ejs')
app.set('views','./views')

app.use('/',router)
app.use('/mpesa',mpesa)


const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`server is runing on port ${port}`))