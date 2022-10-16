import axios from "axios";

const url = 'http://localhost:8000'
export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log(`Error while calling addUser api ${err.message}`);
  }
};


export const getUsers=async ()=>{
  try{
   const response=await axios.get(`${url}/users`);
   return response.data
  }catch(err){
    console.log('error while fetching users',err.message)
  }
}

export const setConversation= async (data)=>{
  try{
    await axios.post(`${url}/conversation/add`,data)
  }catch(err){
    console.log('Error while calling getConversation api',err.message); 
  }
}

export const getConversation=async (data)=>{
try {
  let response=await axios.post(`${url}/conversation/get`, data);
  console.log(response)
  return response.data;
} catch (err) {
  console.log("Error while calling getConversation api", err.message);
}
}

export const newMessage=async(message)=>{
  try{
    await axios.post(`${url}/message/add`,message)
  }catch(err){
    console.log("Error while sending new message",err.message)
  }
} 

export const getMessages=async (id)=>{
  try{
    let response=await axios.get(`${url}/message/get/${id}`);
    return response.data;
  }catch(err){
    console.log("Error while sending getting message api", err.message);

  }
}