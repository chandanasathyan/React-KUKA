import { Drawer, Typography,IconButton, Grid } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/system'
import "./Drawer.css";
import { IoIosClose } from "react-icons/io"

const DrawerIcon = () => {
    const [isDrawer,setIsDrawer]=useState(false)
   
  return (
    <>

      <Drawer className='draw' anchor='left' open={isDrawer} onClose={()=>setIsDrawer(false)}>
      
        <Box className='navbox'>
        <Typography sx={{marginTop:"90px",marginLeft:"30px"}}>
            <p style={{color:"red",fontWeight:'lighter'}}>Home</p>
            <p className='pp'>Industries<i id='ico' class="fa fa-angle-right" aria-hidden="true"></i></p>
            <p className='pp'>Products<i id='ico1' class="fa fa-angle-right" aria-hidden="true"></i></p>
            <p className='pp'>Robot Guide</p>
            <p className='pp'>Services<i id='ico2' class="fa fa-angle-right" aria-hidden="true"></i></p>
            <p className='pp'>Innovation & iiQKA<i id='ico3' class="fa fa-angle-right" aria-hidden="true"></i></p>
            <p className='pp'>Company<i id='ico4' class="fa fa-angle-right" aria-hidden="true"></i></p>   
        </Typography>
        
       <div className="vl"></div> 
        </Box>

      </Drawer>
      <IconButton size='large' onClick={()=>setIsDrawer(true)} >
       
           {isDrawer?<IoIosClose/>:<MenuIcon/>}

           
        </IconButton>
    </>
  )
}

export default DrawerIcon