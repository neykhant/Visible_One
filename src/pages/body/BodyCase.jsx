import {  Card, CardContent, Grid, Typography } from '@mui/material'
// import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import bodycase from '../../images/case-style.png'
// import Style from '../Header/Style.module.css'

const BodyCase = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
            // console.log("ddd", data?.data)
            setApiData(data?.data);
        }
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);;
    }, [])

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <img style={{ width: "50%" }} src={bodycase} alt="bodycase" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6" component="h6" m={1}
                    textAlign="left"
                >
                    <span>OUR</span> <span style={{ color: "#2DC4EA", margin: "3px" }}>CHALLENGES</span>
                </Typography>
                {
                    apiData?.map((da) => {
                        return (
                            <Card key={da?.id} sx={{ width: "100%", height: "50px", marginTop: "5px", backgroundColor: "#35a192" }} >
                                <CardContent sx={{ padding: "0px !important" }}>
                                    <Typography sx={{ fontSize: 14, color: "white", padding: "10px" }}
                                        display="flex" justifyContent="start" alignItems="center"
                                        color="text.secondary">
                                        <span style={{ fontSize: "20px", marginRight: "5px", color: "#2DC4EA" }}>0{da?.id}</span>{da?.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }

            </Grid>
        </Grid>
    )
}

export default BodyCase