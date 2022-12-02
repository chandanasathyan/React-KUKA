import { Grid } from '@mui/material'
import React from 'react'
import "./Footer.css"
import footer from "../Images/KUKA_BM1.png";
import { ImYoutube2} from 'react-icons/im';


const Footer = () => {
  return (
    <>
    <div className='background'>
        <Grid container>
            <grid>
              <h4 className='footh4'>Subscribe to the KUKA Newsletter</h4>
            </grid>
            <grid>
              <p className='footp'>Your email address</p>
              <hr/>
            </grid>
            <grid>
                <button className='butfoot'><i id='fa-arr' class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </grid>
        </Grid>
    </div>

    <div className='background1'>
        <Grid container>
           <grid>
            <img className='imgfoot' src={footer} alt=''/>
           </grid>
           <grid>
           <p className='footp1'>© KUKA AG 2022 &nbsp;&nbsp;&nbsp;&nbsp; Imprint &nbsp;&nbsp;&nbsp;&nbsp; Privacy &nbsp;&nbsp;&nbsp;&nbsp; Cookie settings</p>
           </grid>
           <grid>
            <div className='iconfoot'>
             <span className='utub'><ImYoutube2/></span>
             <i id='face' class='fa fa-facebook-square'></i>
             <i id='link' class='fa fa-linkedin-square'></i>
             <i id='twit' class="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <p className='footp2'>English-India</p>
           </grid>
        </Grid>
    </div>
    </>
  )
}

export default Footer