import { Button, Grid } from '@mui/material'
import React from 'react'
import home from "../Images/iiQKA_und_ECO_Header.jpg"
import home1 from "../Images/robot-guide_jpg.jpg"
import home2 from "../Images/mixed-reality_header.jpg"
import home3 from "../Images/Automobilindustrie Automatisierung.jpg"
import "./Banner.css"
import { FaAngleRight ,FaAngleLeft} from 'react-icons/fa';

const Banner = () => {
  return (
    <>
    <div className='banner'>
    <Grid container>
        <Grid item xs={12}>
            <div id class="uk-position-relative uk-visible-toggle" tabindex="-1"  uk-slideshow="animation: push">

               <ul class="uk-slideshow-items"  >
                   <li>
                       <img id='imag' src={home1} alt="" uk-cover/>
                       <div class="uk-position-center uk-position-small uk-text-center uk-light">
                           <h2 class="uk-margin-remove">KUKA Robot Guide:Find case studies<br/>
                            and robots for your industry and <br/>
                            desired application!</h2>
                            <p><button className='but'><i class="fa fa-arrow-right" aria-hidden="true"></i></button></p>
                            
                       </div>
                       <p className='para0'><span>Robot Guide</span>
                              <span className='span0'>Mixed Reality Interface</span>
                              <span className='span0'>White Paper</span>
                              <span className='span0'>iiQKA</span></p>
                   </li>
                   <li>
                       <img id='imag' src={home2} alt="" uk-cover/>
                       <div class="uk-position-center uk-position-small uk-text-center uk-light">
                           <h2 class="uk-margin-remove">Bussiness Lab Innovation:Mixed<br/> Reality Interface</h2>
                           <p><button className='but'><i class="fa fa-arrow-right" aria-hidden="true"></i></button></p>
                           
                       </div>
                       <p className='para0'><span>Robot Guide</span>
                              <span className='span0'>Mixed Reality Interface</span>
                              <span className='span0'>White Paper</span>
                              <span className='span0'>iiQKA</span></p>
                   </li>
                   <li>
                       <img id='imag' src={home3} alt="" uk-cover/>
                       <div class="uk-position-center uk-position-small uk-text-center uk-light">
                           <h2 class="uk-margin-remove">Robotics and E-Mobility:Head start<br/>
                            in the joining and welding of<br/>
                             aluminium for electric vehicles</h2>
                           <p><button className='but'><i class="fa fa-arrow-right" aria-hidden="true"></i></button></p>
                           
                       </div>
                       <p className='para0'><span>Robot Guide</span>
                              <span className='span0'>Mixed Reality Interface</span>
                              <span className='span0'>White Paper</span>
                              <span className='span0'>iiQKA</span></p>
                   </li>
                   <li>
                       <img id='imag' src={home} alt="" uk-cover/>
                       <div class="uk-position-center uk-position-small uk-text-center uk-light">
                           <h2 class="uk-margin-remove">iiQKA:The new OS and Ecosystem <br/>from KUKA</h2>
                           <p><button className='but'><i class="fa fa-arrow-right" aria-hidden="true"></i></button></p>
                           
                       </div>
                       <p className='para0'><span>Robot Guide</span>
                              <span className='span0'>Mixed Reality Interface</span>
                              <span className='span0'>White Paper</span>
                              <span className='span0'>iiQKA</span></p>
                   </li>
               </ul>
           
               <div class="uk-light">
                   <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"><FaAngleLeft/></a>
                   <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"><FaAngleRight/></a>
               </div>

            </div>
        </Grid>
    </Grid>
    </div>

    


    </>
  )
}

export default Banner