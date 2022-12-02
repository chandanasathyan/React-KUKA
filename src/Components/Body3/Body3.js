import { Grid } from '@mui/material'
import React from 'react'
import img4 from "../Images/kuka-book.jpg";
import "./Body3.css"

const Body3 = () => {
  return (
    <>
    <Grid container >
        <Grid item sm={6} md={6} >
            <div>
                <img className='bodyimg' src={img4} alt=''/>
            </div>
        </Grid>
        <Grid item sm={6} md={6}>
            <h4 className='bodyhead'>KUKA's comprehensive product portfolio for robotics, software and service</h4>
            <button className='button'>Catalog Download</button>
        </Grid>
        <hr className='horr'/>
    </Grid>

    {/* -----------1024----------- */}

    {/* <Grid container sx={{display:{ xs: 'none', lg: 'none', md:"block"}}}>
        <Grid item >
            <div>
                <img className='bodyimg1' src={img4} alt=''/>
            </div>
        </Grid>
        <Grid item>
            <h4 className='bodyhead1'>KUKA's comprehensive product portfolio for<br/> robotics, software and service</h4>
            <button className='button1'>Catalog Download</button>
        </Grid>
        <hr className='horr1'/>
    </Grid> */}

    </>
  )
}

export default Body3