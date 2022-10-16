import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import ChatFooter from "./ChatFooter";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../services/api";
import { useEffect } from "react";
import Message from "./Message";
const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container=styled(Box)`
  padding:1px 80px;
`
const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages,setMessages]=useState([])
  const [newMessageFlag,setNewMessageFlag]=useState(false);
  const [file,setFile]=useState();
  const [image,setImage]=useState('')

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data)
    };
    conversation._id && getMessageDetails();
  }, [conversation?._id,person.id ,newMessageFlag]);
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    let message={};
    if (code === 13) {
      
      if(!file){
         message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      }else{
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      
      await newMessage(message);
      setValue("");
      setImage("");
      setFile("");
      setNewMessageFlag(prev => !prev)
    }
  };
  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map(message=>(
            <Container >

              <Message message={message}/>
            </Container>
          ))
        }
      </Component>
      <ChatFooter sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage}/>
    </Wrapper>
  );
};

export default Messages;
