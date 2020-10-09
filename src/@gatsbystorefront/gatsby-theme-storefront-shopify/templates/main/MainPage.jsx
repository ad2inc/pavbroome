import React from 'react';
import { Flex, Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../../../Components/Image'
// import Slider from '../../components/Slider'

import MainPageCarousel from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageCarousel';
import MainPageCollectionBlock from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageCollectionBlock';
import MainPageProductBlock from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageProductBlock';

// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

import styled from "styled-components"

const CustomBox = styled.div`








// .each-slide > div {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-size: cover;
//   height: 400px;
//   text-align:center;
// }




  
  .each-slide span {
	padding: 20px;
	font-size: 20px;
	background: #efefef;
	text-align: center;
	position:relative;
	z-index:20;
	color:#ff0000;
	border:0px solid blue;
  // bottom:10%;
  right:0;
  top:200px;

  width:200px;
  display:none;

  }

  .each-slide img{
    position:relative;
  }
  .each-slide img:after{
    display:block;
    content: ('');
    position:absolute;
    z-index:90;
    border:1px solid yellow;
  }






`

const MainPage = props => {

  


  const dataQuery = useStaticQuery(graphql`
    query MainPageStaticQuery1 {
      site {
        siteMetadata {
          gatsbyStorefrontConfig {
            mainPage {
              handle
              type
              name
              textBgColor
              textColor
              children {
                handle
                type
                name
                textBgColor
                textColor
              }
            }
          }
        }
      }
    }
  `);





  const { mainPage } = dataQuery.site.siteMetadata.gatsbyStorefrontConfig;

  const { data } = props;

  const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    easing: 'easeIn',

    // prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    // nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

  return (
<CustomBox style={{}} className="slidecom">






      
	  





    <div style={{display:'', width:'100%', paddingTop:'12px', overflow:'', border:'0px solid blue',}}>
<>


<div style={{position:'relative', overflow:'', height:''}}>
        {/* <Slide easing="ease"> */}
        <Slide {...properties}>

          <div className="each-slide">
    
              {/* <div style={{position:'absolute', zIndex:'50', width:'', textAlign:'center', border:'0px solid green', marginLeft:'15%', top:'150px'}}>
                <h3 style={{color:'#fff', fontSize:'30px'}}>The Rolex Collection</h3>
                <a href="" style={{color:'#fff'}}>View All Watches</a>
                
                </div> */}

<a href="" style={{color:'#fff'}}><Image alt="test" filename="rolex-banner1.jpg" /></a>
            </div>
 

          <div className="each-slide">
            <a href="" style={{color:'#fff'}}><Image alt="test" filename="banner2.jpg" /></a>
            </div>

            <div className="each-slide">
            <a href="" style={{color:'#fff'}}><Image alt="test" filename="banner3.jpg" /></a>
            </div>


            <div className="each-slide">
            <a href="" style={{color:'#fff'}}><Image alt="test" filename="banner4.jpg" /></a>
            </div>

            <div className="each-slide">
            <a href="" style={{color:'#fff'}}><Image alt="test" filename="banner5.jpg" /></a>
            </div>

            <div className="each-slide">
            <a href="" style={{color:'#fff'}}><Image alt="test" filename="banner6.jpg" /></a>
            </div>

    

          {/* <div className="each-slide">
            <div>
              <span>Slide 3</span>
              <Image alt="test" filename="slide-3.jpg" />
            </div>
          </div> */}
        </Slide>
      </div>


{/* <Image alt="test" filename="slide-1.jpg" />  */}
</>
    </div>

    </CustomBox>
  );
};

export default MainPage;
