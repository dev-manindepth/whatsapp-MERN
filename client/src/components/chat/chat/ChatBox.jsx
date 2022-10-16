import { Box } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'
import Messages from './Messages'

const ChatBox = () => {
    const {person} = useContext(AccountContext);

  return (
    <Box  style={{height:'75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person}/>
        <ChatFooter/>
    </Box>
  )
}

export default ChatBox