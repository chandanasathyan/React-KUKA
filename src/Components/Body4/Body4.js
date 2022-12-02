import React from 'react'
import "./Body4.css"
import img5 from "../Images/kuka.jpg";
import { Grid } from '@mui/material';

const Body4 = () => {
  return (
    <>
    <div className='bkgrnd'>
      <Grid container>
        <Grid sm={8} md={8}>
            
            <h4 className='body4head'>News</h4>
            <img className='img5' src={img5} alt=""/> 
            <h4 className='body4h4'>21 september 2022-Products and Solutions</h4> 
            <h3 className='body4h3'>More applications, the familiar simplicity: the new LBR iisy cobots</h3>
            <p className='body4para'><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;&nbsp; view more</p>
        </Grid>
         <Grid sm={4} md={4}>
            <div className='body4div'>
                 <div class="uk-card5 uk-card-default uk-card-body uk-width-1-2@m">
                    <h6 class="uk-card-title5">21 september 2022 Company Innovation</h6>
                    <p className='body4p'>Open Platform Challenge: These are the finalists for the 2023 KUKA Innovation Award</p>
                </div>  
                <div class="uk-card6 uk-card-default uk-card-body uk-width-1-2@m">
                    <h6 class="uk-card-title6">7 september 2022-Products and Solutions</h6>
                    <p className='body4p1'>Faster, stronger, more versatile: KR SCARA now available with a payload of 12 kilograms</p>
                </div>
                <div class="uk-card7 uk-card-default uk-card-body uk-width-1-2@m">
                    <h6 class="uk-card-title7">17 august 2022-Products and Solutions</h6>
                    <p className='body4p2'>KUKA canteen robot assembles fresh rice dishes</p>
                </div>
                <div class="uk-card8 uk-card-default uk-card-body uk-width-1-2@m">
                    <h6 class="uk-card-title8">04 august 2022-Company</h6>
                    <p className='body4p3'>Record orders received in the first half-year for KUKA despite difficult economic situation</p>
                </div>
                <div class="uk-card9 uk-card-default uk-card-body uk-width-1-2@m">
                    <h6 class="uk-card-title9">28 july 2022-Products and Solutions</h6>
                    <p className='body4p4'>Support for a sustainable circular economy: Recycling robot tackles electrical waste</p>
                </div>  
            </div> 
        </Grid>    
        </Grid>  
      
    </div>
    </>
  )
}

export default Body4