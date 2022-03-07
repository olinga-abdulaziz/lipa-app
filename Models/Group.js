const mongoose=require('mongoose')

const GroupSchema=new mongoose.Schema({
    group:{
        type:String,
        required:true
    },
    groupId:{
        type:String,
        required:true
    },
    groupSecrete:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    admin:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Group',GroupSchema)