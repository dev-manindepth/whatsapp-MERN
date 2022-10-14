import { Box ,styled} from "@mui/material";
import React, { useContext, useState } from "react";
import { Chat as ChatIcon } from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component=styled(Box)`
    height: 44px;
    background:#ededed ;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper=styled(Box)`
    & > *{
        margin-left: 2px;
        padding: 8px;
        color: #000;
    }
    & :first-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`
const Image=styled('img')({
    height: 40,
    width: 40,
    borderRadius:'50%'
})
const Header = () => {
    const [openDrawer,setOpenDrawer]=useState(false);

    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        <Image src={account.picture} alt="account" onClick={toggleDrawer} />
        <Wrapper>
            <ChatIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}  />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
