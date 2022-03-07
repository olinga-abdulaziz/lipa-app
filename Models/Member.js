const mongoose=require('mongoose')


const MemberSchema=new mongoose.Schema({
    fullnames:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    group:{
        type:String,
        required:true,
    },
    groupId:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    verify:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Member',MemberSchema)