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
    console.log('Error while calling setConversation api',err.message); 
  }
}