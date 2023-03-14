import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import HeaderPng from '../../images/Header.png'
// import { styled } from '@mui/material/styles';

// const Root = styled('AppBar')(({ theme }) => ({
//     height: "10px",
//     [theme.breakpoints.down('lg')]: {
//         height: "13px",
//     },
//     [theme.breakpoints.down('md')]: {
//         height: "40px",
//     },
//     [theme.breakpoints.down('sm')]: {
//         height: "40px",
//     },
// }));


const HeaderNav = () => {
    return (
        <Box>
            {/* <Root> */}
                <AppBar sx={{ backgroundColor: "white", maxHeight: "15px" }}>
                    <img src={HeaderPng} alt="HeaderPng" />
                </AppBar>
            {/* </Root> */}
        </Box>
    )
}

export default HeaderNav