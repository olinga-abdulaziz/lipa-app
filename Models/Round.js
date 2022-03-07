const mongoose=require('mongoose')

const RoundSchema=new mongoose({
    Round:{
        type:String,
        required:true
    },
    Members:{
        type:String,
        required:true
    },
    groupId:{
        type:String,
        required:true
    }
})