import React from 'react'
import img1 from "../Images/card1.jpg";
import img2 from "../Images/card2.jpg";
import img3 from "../Images/card3.jpg";
import { Grid } from '@mui/material'
import "./Body2.css"

const Body2 = () => {
  return (
    <>
    <Grid container spacing={2}>
     <Grid item xs={12} sm={4} md={4} lg={4}>
     <div class="uk-child-width-1-2@m" uk-grid>
     <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-body">
                <h3 class="uk-card-title">Robot Systems</h3>
                <p className='cardpara'>KUKA offers industrial robots in a wide range of versions with various payload capacities and reaches.Learn more!</p>
            </div>
            <div className='hoverimg'>
            <div class="uk-card-media-bottom">
                <img className="cardimg" src={img1}  alt=""/>
            </div>
            </div>
            <button className='butto'><i style={{color:"#fff",fontSize:"20px"}} class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
     </div>
     </div>
     </Grid>
     <Grid item xs={12} sm={4} md={4} lg={4}>
     <div class="uk-child-width-1-2@m" uk-grid>
     <div>
        <div class="uk-card1 uk-card-default">
            <div class="uk-card-body">
                <h3 class="uk-card-title1">Download Center</h3>
                <p className='cardpara1'>Looking for that brochure,CAD data or certificate?Search no more!Our Download center has it all.</p>
            </div>
            <div className='hoverimg'>
            <div class="uk-card-media-bottom">
                <img className="cardimg1" src={img2}  alt=""/>
            </div>
            </div>
            <button className='butto1'><i style={{color:"#fff",fontSize:"20px"}} class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
     </div>
     </div>
     <hr className='hor'/>
     </Grid>
     <Grid item xs={12} sm={4} md={4} lg={4}>
     <div class="uk-child-width-1-2@m" uk-grid>
     <div>
        <div class="uk-card2 uk-card-default">
            <div class="uk-card-body">
                <h3 class="uk-card-title2">Press</h3>
                <p className='cardpara2'>In the KUKA AG Press area you can find the latest press releases and a wide range presentations,high-resolution images and videos.</p>
            </div>
            <div className='hoverimg'>
            <div class="uk-card-media-bottom">
                <img className="cardimg2" src={img3}  alt=""/>
            </div>
            </div>
            <button className='butto2'><i  style={{color:"#fff",fontSize:"20px"}} class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
     </div>
     </div>
     </Grid>
    
    </Grid>
    </>
  )
}

export default Body2