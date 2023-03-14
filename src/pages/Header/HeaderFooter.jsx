import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
// import tablet from '../../images/Tablet.png'
import Style from './Style.module.css'
import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({
  marginTop: "150px",
  [theme.breakpoints.down('lg')]: {
    marginTop: "120px",
  },
  [theme.breakpoints.down('md')]: {
    marginTop: "120px",
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: "120px",
  },
}));



const HeaderFooter = () => {
  return (
    <Root>
      <div sx={{ marginBottom: "40px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="body1" component="h6">
              ABOUT <span style={{ color: "#2DC4EA" }}>TRIPPRO</span>
            </Typography>
            <p style={{ lineHeight: "24px", fontSize: "15px" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            </p>
            <Button className={Style.footerBtn} >TOUR TO WEBSITE</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} display="flex" justifyContent="space-evenly" alignItems="center">
            <div className={Style.circle5}>
              <div className={Style.circle4}>
                <div className={Style.circle}>
                  <div className={Style.circle2}>
                    <div className={Style.circle3}>
                      {/* <img style={{ width: "200px", height: "270px" }} src={tablet} alt='tablet' /> */}
                      <div className={Style.circleimg}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Root>
  )
}

export default HeaderFooter