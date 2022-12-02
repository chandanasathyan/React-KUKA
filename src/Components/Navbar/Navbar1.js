import React, { useState } from 'react'
import {AppBar,Toolbar,Grid, Typography} from "@mui/material";
import Logo from "../Images/kuka-logo.png"
import "./Navbar1.css";
import { BiSearch,BiGlobe } from 'react-icons/bi';
import { CgLogIn } from 'react-icons/cg';
import { FaAngleDown } from 'react-icons/fa';
import Drawericon from './Drawericon';


const Navbar1 = () => {
  const [isDrawer,setIsDrawer]=useState(false)
  return (
    <AppBar sx={{backgroundColor:"rgb(222, 221, 221)",paddingBottom:"10px"}}>
        <Toolbar>
            <Grid container className='navbar'sx={{ display: { xs: 'none', lg: 'flex' } }}>

                <Grid item xs={12}>
                <Grid item xs={2}>
                <a  href='/'>
                   <img style={{marginTop:"15px"}} src={Logo} alt="" srcset="" width={150}/>
                </a>
                </Grid>
                <Grid item xs={12} sx={{diaplay:"flex",justifyContent:"end",alignItems:"end",textAlign:"end"}}>
                 
                  <p style={{marginTop:"-35px", color:"black" ,fontSize:"20px" }} href='/' className='search' > <span style={{marginRight:"40px"}}><BiSearch/></span>  <span style={{marginRight:"40px"}}><BiGlobe/></span> <span style={{marginRight:"60px"}}><CgLogIn/></span></p>
                  {/* <a style={{color:"black" ,fontSize:"20px"}} href='/' className='language'> <BiGlobe/></a>
                  <a style={{color:"black" ,fontSize:"20px"}} href='/' className='login'> <CgLogIn/></a> */}
                  <p style={{marginTop:"-25px", color:"#595d61" , fontSize:"12px"}} href='/' className='search' ><span style={{marginRight:"21px"}}> Search </span><span style={{marginRight:"23px"}}> Language</span><span style={{marginRight:"53px"}}>  Login</span></p>
                  
                </Grid>
                </Grid>
                <Grid item className='nav' xs={12} sx={{display:"flex",color:"#595d61",marginTop:"18px",marginBottom:"10px"}}>
                <Grid item >
                <a style={{marginLeft:"35px",color: "#595d61", textDecoration: "none",fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif",
                  fontWeight: "lighter",fontSize:"17px"}} className='nav1'>Industries<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
                </Grid>
                <Grid item >
                <a style={{marginLeft:"20px",color: "#595d61", textDecoration: "none",fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif",
                  fontWeight: "lighter",fontSize:"17px"}} className='nav2'>Products<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
                </Grid>
                <Grid item >
                <a style={{marginLeft:"20px",color: "#595d61", textDecoration: "none",fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif",
                  fontWeight: "lighter",fontSize:"17px"}} className='nav3'>Robot Guide</a>
                </Grid>
                <Grid item >
                <a style={{marginLeft:"20px",color: "#595d61", textDecoration: "none",fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif",
                  fontWeight: "lighter",fontSize:"17px"}} className='nav4'>Services<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
                </Grid>
                <Grid item >
                <a style={{marginLeft:"20px",color: "#595d61", textDecoration: "none",fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif",
                  fontWeight: "lighter",fontSize:"17px"}} className='nav5'>Innovation & iiQKA<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
                </Grid>
                <Grid item >
                <a style={{marginLeft:"20px",color: "#595d61", textDecoration: "none",fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif",
                  fontWeight: "lighter",fontSize:"17px"}} className='nav6'>Company<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
                </Grid>
            
                
                
                </Grid>
            </Grid>
            

            {/* ---------1024--------- */}

             <Grid container className='navbar'sx={{display:{ xs: 'none', lg: 'none', md:"flex"}}}>

              <Grid item xs={12}>
              <Grid item xs={2}>
              <a  href='/'>
                 <img style={{marginTop:"15px"}} src={Logo} alt="" srcset="" width={150}/>
              </a>
              </Grid>
              <Grid item xs={12} sx={{diaplay:"flex",justifyContent:"end",alignItems:"end",textAlign:"end"}}>
 
                <p style={{marginTop:"-35px", color:"black" ,fontSize:"20px" }} href='/' className='search' > <span style={{marginRight:"40px"}}><BiSearch/></span>  <span style={{marginRight:"40px"}}><BiGlobe/></span> <span style={{marginRight:"60px"}}><CgLogIn/></span></p>
                
                <p style={{marginTop:"-25px", color:"#595d61" , fontSize:"12px"}} href='/' className='search' ><span style={{marginRight:"21px"}}> Search </span><span style={{marginRight:"23px"}}> Language</span><span style={{marginRight:"53px"}}>  Login</span></p>
  
              </Grid>
              </Grid>
              <Grid item className='nav' xs={12} sx={{display:"flex",color:"#595d61",marginTop:"18px",marginBottom:"10px",fontSize:"17px"}}>
              <Grid item >
              <a style={{marginLeft:"105px",color: "#595d61"}} className='nav1'>Industries<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
              </Grid>
              <Grid item >
              <a style={{marginLeft:"20px",color: "#595d61"}} className='nav2'>Products<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
              </Grid>
              <Grid item >
              <a style={{marginLeft:"20px",color: "#595d61"}} className='nav3'>Robot Guide</a>
              </Grid>
              <Grid item >
              <a style={{marginLeft:"20px",color: "#595d61"}} className='nav4'>Services<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
              </Grid>
              <Grid item >
              <a style={{marginLeft:"20px",color: "#595d61"}} className='nav5'>Innovation & iiQKA<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
              </Grid>
              <Grid item >
              <a style={{marginLeft:"20px",color: "#595d61"}} className='nav6'>Company<i style={{fontSize:"15px"}} class="fa fa-angle-down" aria-hidden="true"></i></a>
              </Grid>



              </Grid>
            </Grid> 


            {/* ----------Tab--------- */}

            <Grid container className='navbar'sx={{display:{ xs: 'none', lg: 'none', md:"none",sm:"flex"}}}>

              <Grid item xs={12}>
              <Grid item xs={2}>
              <a  href='/'>
                 <img style={{marginTop:"15px"}} src={Logo} alt="" srcset="" width={150}/>
              </a>
              </Grid>
              <Grid item xs={12} sx={{diaplay:"flex",justifyContent:"end",alignItems:"end",textAlign:"end"}}>
 
                <p style={{marginTop:"-35px", color:"black" ,fontSize:"20px" }} href='/' className='search' > <span style={{marginRight:"40px"}}><BiSearch/></span>  <span style={{marginRight:"40px"}}><BiGlobe/></span> <span style={{marginRight:"60px"}}><CgLogIn/></span></p>
                
                <p style={{marginTop:"-25px", color:"#595d61" , fontSize:"12px"}} href='/' className='search' ><span style={{marginRight:"21px"}}> Search </span><span style={{marginRight:"23px"}}> Language</span><span style={{marginRight:"53px"}}>  Login</span></p>
                <Typography sx={{marginTop:"-60px",color:"red"}} ><Drawericon/> </Typography>
              </Grid>
              </Grid>
              </Grid>

              {/* -------------Mobile view---------- */}


              <Grid container className='navbar'sx={{display:{ xs: 'flex', lg: 'none', md:"none",sm:"none"}}}>

                <Grid item xs={12}>
                <Grid item xs={2}>
                <a  href='/'>
                  <img style={{marginTop:"15px"}} src={Logo} alt="" srcset="" width={100}/>
                </a>
                </Grid>
                <Grid item xs={12} sx={{diaplay:"flex",justifyContent:"end",alignItems:"end",textAlign:"end"}}>

                  <p style={{marginTop:"-23px", color:"black" ,fontSize:"20px" }} href='/' className='search' > <span style={{marginRight:"20px"}}><BiSearch/></span>  <span style={{marginRight:"20px"}}><BiGlobe/></span> <span style={{marginRight:"50px"}}><CgLogIn/></span></p>
  
                  {/* <p style={{marginTop:"-25px", color:"#595d61" , fontSize:"12px"}} href='/' className='search' ><span style={{marginRight:"21px"}}> Search </span><span style={{marginRight:"23px"}}> Language</span><span style={{marginRight:"53px"}}>  Login</span></p> */}
                  <Typography sx={{marginTop:"-60px",color:"red"}} ><Drawericon/> </Typography>
                </Grid>
                </Grid>
                </Grid>


            
        </Toolbar>
        
    </AppBar>
    
  )
}

export default Navbar1