import { AppBar, Toolbar, styled, Box } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;
const Header = styled(AppBar)`
  height: 125px;
  background: #00a884;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 200px;
  background: #00bfa5;
  box-shadow: none;
`;
const Messanger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messanger;
