import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import mobile from "../../images/mobile.png"
import desktop from "../../images/desktop.png"
import smartphone from "../../images/smartphon.png"

const BFooter = () => {
    const [mob, setMobile] = useState(false)

    const handleMobile = () => {
        setMobile(!mob)
    }

    const handleDesktop = () => {
        setMobile(!mob)
    }

    return (
        <div>
            {
                mob &&
                <Box onClick={handleMobile} sx={{ cursor: "pointer"}}>
                    <img src={mobile} alt="mobile" width="100%" style={{ marginTop: "20px" }} />
                </Box>
            }

            {
                !mob &&
                <Box onClick={handleDesktop} sx={{ cursor: "pointer"}}>
                    <img src={desktop} alt="desktop" width="100%" style={{ marginTop: "20px" }} />
                </Box>
            }
            {/* <Button sx={{  borderRadius: "30px", width: "170px", color: "white", marginLeft: "320px",
             backgroundColor: "#3AE7AB", fontSize: "10px", marginBottom: "50px",
             ":hover": { backgroundColor: "#3AE7AB",} }}><img src={smartphone} width="10px" style={{ marginRight: "10px"}} alt="smartphone"/> Mobiless</Button> */}
        </div>
    )
}

export default BFooter