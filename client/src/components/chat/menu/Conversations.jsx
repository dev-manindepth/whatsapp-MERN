import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../../../services/api";
import { Box, Divider, styled } from "@mui/material";
import Conversation from "./Conversation";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const StyledDivider=styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;

`
const Conversations = () => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    fetchData();
  }, []);
  return (
    <Component>
      {users?.map((user) => {
        return (
          user.sub !== account.sub && (
            <>
              <Conversation user={user} />
              <StyledDivider />
            </>
          )
        );
      })}
    </Component>
  );
};

export default Conversations;
