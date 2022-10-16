import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { UserContext } from '../../../context/UserProvider'
import { getConversation } from '../../../services/api'
import ChatHeader from './ChatHeader'
import Messages from './Messages'

const ChatBox = () => {
    const {account} = useContext(AccountContext);
    const {person} = useContext(UserContext)
    const [conversation , setConversation]=useState({})

    useEffect(()=>{
      const getConversationDetails=async ()=>{
       let data= await getConversation({senderId:account.sub,receiverId:person.sub})
       setConversation(data)
      }
      getConversationDetails()
    },[person.sub,account.sub])
  return (
    <Box  style={{height:'75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox