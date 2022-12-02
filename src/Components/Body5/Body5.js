import { Box, Grid } from '@mui/material'
import React from 'react'
import "./Body5.css"
import map from "../Images/Worldmap.png";

const Body5 = () => {
  return (
    <>
     <Box className='box'>
        <img className='wmap' src={map}  alt=''/>
        <Grid>
           <div className='body5div'>
              <h2 className='body5h2'>KUKA Worldwide</h2>
              <p className='body5p'>Find here all addresses and contacts</p>
              <button className='button5'><i id='fa-arr' class="fa fa-arrow-right" aria-hidden="true"></i></button>
           </div>
        </Grid>
     </Box>
     
    </>
  )
}

export default Body5