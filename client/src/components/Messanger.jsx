import { AppBar, Toolbar ,styled, Box} from '@mui/material'
import React from 'react'
import LoginDialog from './account/LoginDialog'

const Component=styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;
`
const Header=styled(AppBar)`
    height: 200px;
    background: #00bfa5;
    box-shadow: none;
`
const Messanger = () => {
  return (
    <Component>
    <Header>
        <Toolbar>

        </Toolbar>
    </Header>
    <LoginDialog/>
    </Component>
  )
}

export default Messanger