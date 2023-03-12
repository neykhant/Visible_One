import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import HeaderPng from '../../images/Header.png'

const HeaderNav = () => {
    return (
        <Box>
            <AppBar sx={{ backgroundColor: "white", maxHeight: "10px" }}>
                <img src={HeaderPng} alt="HeaderPng" />
            </AppBar>
        </Box>
    )
}

export default HeaderNav