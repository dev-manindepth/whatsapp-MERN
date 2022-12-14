import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { UserContext } from '../../../context/UserProvider';
import { setConversation } from '../../../services/api';

const Component=styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;
    /* align-items: center; */
`
const Image=styled('img')({
    width: 50,
    height: 50,
    borderRadius:'50%',
    padding:'0 14px' ,
})
const Conversation = ({user}) => {
    const {account}= useContext(AccountContext)
    const {setPerson} = useContext(UserContext)
    const getUser=async()=>{
        setPerson(user);
        await setConversation({senderId:account.sub,receiverId:user.sub})

    }
  return (
        <Component  onClick={()=>getUser()}>
            <Box>
                <Image src={user.picture} alt={user.name} />
            </Box>
            <Box>
                <Box>
                    <Typography >{user.name} </Typography>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation