const express=require('express')
const router=require('./Routes/routes')
const dotenv=require('dotenv')

const app=express()

dotenv.config({path:'./config/config.env'})

app.use('',router)


const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`server is runing on port ${port}`))