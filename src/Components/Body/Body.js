import { Grid } from '@mui/material'
import React from 'react'
import "./Body.css";

const Body = () => {
  return (
    <>
    <Grid className='third' sx={{ display: { xs: 'none', lg: 'block' } }}>
        <h2 className='head'>Discover the variety of automation solutions by KUKA</h2>
        <p className='para1'>KUKA offers tailor-made automation solutions for your industry. Learn more about<br/>
         successful customer projects worldwide.</p>
         <button className='butt'>Discover our case studies</button>
         <hr className='hrr'
           style={{
             height: '4px',
             marginTop:'150px',
             borderColor: 'rgb(93, 90, 90)'
        }}
      />
    </Grid>

    {/* ------1024------ */}

    <Grid className='third' sx={{display:{ xs: 'none', lg: 'none', md:"block"}}}>
        <h2 className='head'>Discover the variety of automation solutions by<br/> KUKA</h2>
        <p className='para1'>KUKA offers tailor-made automation solutions for your<br/> industry. Learn more about
         successful customer projects<br/> worldwide.</p>
         <button className='butt'>Discover our case studies</button>
         <hr className='hrr'
           style={{
             height: '4px',
             marginTop:'150px',
             borderColor: 'rgb(93, 90, 90)'
        }}
      />
      </Grid>

      {/* -------tab-------- */}


      <Grid className='third' sx={{display:{ xs: 'none', lg: 'none', md:"none",sm:"block"}}}>
        <h2 className='head'>Discover the variety of automation solutions by<br/> KUKA</h2>
        <p className='para1'>KUKA offers tailor-made automation solutions for your industry.<br/> Learn more about
         successful customer projects worldwide.</p>
         <button className='butt'>Discover our case studies</button>
         <hr 
           style={{
             height: '4px',
             transform:"translateY(100px)",
             borderColor: 'rgb(93, 90, 90)',
             margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // display: "flex",
        width:"220px"
        }}
      />
      </Grid>

      {/* ----------mobile---------- */}

      <Grid className='third' sx={{display:{ xs: 'block', lg: 'none', md:"none",sm:"none"}}}>
        <h2 style={{fontSize:"22px",fontWeight:"bold",marginLeft:"15px",marginRight:"15px"}}>Discover the variety of automation solutions by KUKA</h2>
        <p id='parr' style={{fontSize: "1.2rem",marginLeft:"18px",marginRight:"18px",
             fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif",
             fontWeight: "lighter"}}>KUKA offers tailor-made automation solutions for your industry.Learn more about
         successful customer projects worldwide.</p>
         <button style={{backgroundColor: "#fff",
               padding: "12px",
               paddingLeft: "25px",
               paddingRight: "25px",
               fontSize: "1.20rem",
               lineHeight: "1.8125rem",
               fontWeight:"lighter",
               color: "rgb(93, 90, 90)",
               fontFamily: "'kuka-bulo', Calibri, Segoe UI, Helvetica, Arial, Sans-Serif"}}>Discover our case studies</button>
         <hr 
           style={{
             height: '4px',
             transform:"translateY(90px)",
             borderColor: 'rgb(93, 90, 90)',
             marginLeft:"100px",
             width:"220px",
             margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        }}
      />
      </Grid>



    

    </>
  )
}

export default Body