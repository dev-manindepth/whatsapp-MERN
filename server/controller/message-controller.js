import Conversation from "../model/conversationSchema.js";
import Message from "../model/messageSchema.js";

export const newMessage=async(req,res)=>{
    try{
        const newMessage=new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
        return res.status(200).json('Message has been sent successfully ')
    }catch(err){
        return res.status(500).json("Error while sending message ",err.message);

    }
}

export const getMessages=async(req,res)=>{
    try{
        const messages=await Message.find({conversationId:req.params.id})
        return res.status(200).json(messages)
    }   catch(err){
        return res.status(500).json('error while fetching messages',err.message)
    }
}