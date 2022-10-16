import mongoose from "mongoose";

const conversationSchema=mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String,
    }
},{
    timeStamps:true
})

const Conversation= mongoose.model('conversation',conversationSchema);

export default Conversation;