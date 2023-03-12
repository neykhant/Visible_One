import { Box, rgbToHex, Stack, Typography } from '@mui/material'
import React from 'react'
// import image from '../../images/HBody.png'
import wp from '../../images/wpb.svg'
import resp from '../../images/resp.svg'
import shop from '../../images/shop.svg'
import laptop from '../../images/laptop.png'
import navbody from '../../images/navbody.png'
import Style from './Style.module.css'
import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({
    marginTop: '100px',

    [theme.breakpoints.down('lg')]: {
        marginTop: '60px',

    },
    [theme.breakpoints.down('md')]: {
        marginTop: '40px',

    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '40px',

    },
}));

const RootB = styled('div')(({ theme }) => ({
    marginTop: '20px',
    width: '540px',
    [theme.breakpoints.down('lg')]: {
        marginTop: '15px',
        width: '500px',
    },
    [theme.breakpoints.down('md')]: {
        marginTop: '10px',
        width: '430px',
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '10px',
        width: '300px',
    },
}));

const HeaderBody = () => {
    return (
        <div style={{ height: "100%" }}>
            <div className={Style.headerBodyImg}>
                <Root>
                    <div className={Style.headerTypo}>
                        <Box>
                            <Typography sx={{ typography: { sm: 'body1', xs: 'body2', md: 'body2', lg: 'h4' } }} >
                                TRIPPRO - AN ECOMMERCE SOLUTION
                            </Typography>
                            <Typography sx={{ typography: { sm: 'body1', xs: 'body2', md: 'body2', lg: 'body2' } }} mt={2} display="flex" justifyContent="center" alignItems="center">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </Typography>
                            <Stack direction="row" spacing={2} mt={2} display="flex" justifyContent="center" alignItems="center">
                                <Typography textAlign="center" variant="body2" component="h6" display="flex" justifyContent="center" alignItems="center">
                                    <div style={{ textAlign: "center", margin: "5px" }}>
                                        Built for:
                                    </div>
                                    <img src={wp} alt="wp" width={30} />
                                </Typography>
                                <Typography textAlign="center" variant="body2" component="h6" display="flex" justifyContent="center" alignItems="center">
                                    <div style={{ textAlign: "center", margin: "5px" }}>
                                        <div>
                                            Technologies:
                                        </div>
                                        <div>
                                            Wordpress
                                        </div>
                                    </div>
                                    <Box >
                                        <img src={resp} alt="wp" width={30} />
                                    </Box>
                                </Typography>
                                <Typography textAlign="center" variant="body2" component="h6" display="flex" justifyContent="center" alignItems="center">
                                    <div style={{ textAlign: "center", margin: "5px" }}>
                                        <div>
                                            Industry:
                                        </div>
                                        <div>
                                            Ecommerce
                                        </div>
                                    </div>
                                    <img src={shop} alt="wp" width={30} />
                                </Typography>
                            </Stack>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <RootB display="flex" justifyContent="center" alignItems="center" >
                                    <div className={Style.HeadLaptop} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <div className={Style.HeadLaptopInside} />
                                    </div>
                                </RootB>
                            </Box>
                        </Box>
                    </div>
                </Root>
            </div>
        </div>
    )
}

export default HeaderBody