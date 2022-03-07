const express=require('express')
const Member=require('./Routes/MembersRoutes')
const Group=require('./Routes/GroupRoute')
const dotenv=require('dotenv')
const mongodb=require('./db/mongoDB')
const bodyParser=require('body-parser')
const ejs=require('ejs')
const cors=require('cors')

const app=express()

app.use(cors())
dotenv.config()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongodb()



app.set('view engine','ejs')
app.set('views','./views')

app.use('/',Member)
app.use('/group',Group)



const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`server is runing on port ${port}`))