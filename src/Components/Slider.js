import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import ScrollAnimation from 'react-animate-on-scroll'
// import CookieConsent from "react-cookie-consent"
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
// import Image from '../components/Image'
import Image from './Image'
// import image1 from '../img/gallery1/night283.jpg'
// import image2 from '../img/gallery1/night221.jpg'
// import image3 from '../img/gallery1/night22.jpg'


import styled from "styled-components"

const CustomBox = styled.div`

.each-slide > div {
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: cover;
	height: 600px;
  }
  
  .each-slide span {
	padding: 20px;
	font-size: 20px;
	background: #efefef;
	text-align: center;
	position:absolute;
	z-index:2;
	color:#ff0000;
	border:1px solid blue;
	top:100px;
  }


  .react-slideshow-container .default-nav{
	  position:absolute;
	  z-index:50;
	  top:15vh;
  }



`



const Slideshow = () => {
    return (
      <CustomBox style={{}} className="slidecom">
 

         



 <div style={{position:'relative', overflow:'', height:'600px'}}>
        <Slide easing="ease">
          <div className="each-slide">
            <div>
			<Image alt="test" filename="rolex1.jpg" />
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
			<Image alt="test" filename="rolex2.jpg" />
              <span>Slide 2</span>
            </div>
          </div>
          {/* <div className="each-slide">
            <div>
              <span>Slide 3</span>
            </div>
          </div> */}
        </Slide>
      </div>

      
	  {/* <BgImage alt="test" filename="rolex1.jpg" /> */}
      </CustomBox>
    )
}

export default Slideshow






