import React from 'react';
import { Flex, Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';

import { Fade } from 'react-slideshow-image'
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



  // .each-slide span {
	// padding: 20px;
	// font-size: 20px;
	// background: #efefef;
	// text-align: center;
	// position:relative;
	// z-index:20;
	// color:#ff0000;
	// border:0px solid blue;
  // // bottom:10%;
  // right:0;
  // top:200px;

  // width:200px;
  // display:none;

  // }

  // .each-slide img{
  //   position:relative;
  // }
  // .each-slide img:after{
  //   display:block;
  //   content: ('');
  //   position:absolute;
  //   z-index:90;
  //   border:1px solid yellow;
  // }




  @media (max-width: 48rem) {

.pageTop{
  padding-top:52px !important;
  // border:3px solid red !important;
}

#tudorcta{
  top:-1rem !important;
  right:25px !important;
}

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
    indicators: true,
    easing: 'easeIn',
    arrows: false,

    // prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    // nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

  return (
<CustomBox style={{}} className="slidecom">






      
	  





    <div className="pageTop" style={{display:'', width:'100%', paddingTop:'12px', overflow:'', border:'0px solid blue',}}>
<>


<div style={{position:'relative', overflow:'', height:'', zIndex:'0'}}>
        {/* <Slide easing="ease"> */}
        <Fade {...properties}>

          <div className="each-slide">
    
              {/* <div style={{position:'absolute', zIndex:'50', width:'', textAlign:'center', border:'0px solid green', marginLeft:'15%', top:'150px'}}>
                <h3 style={{color:'#fff', fontSize:'30px'}}>The Rolex Collection</h3>
                <a href="" style={{color:'#fff'}}>View All Watches</a>
                
                </div> */}

<a href="/rolex/" style={{color:'#fff'}}><Image alt="test" filename="rolex-banner1.jpg" /></a>
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
        </Fade>
      </div>


{/* <Image alt="test" filename="slide-1.jpg" />  */}
</>
    </div>


<div style={{background:'#222', color:'#fff', width:'90%', margin:'1rem auto', padding:'1% 2%', borderRadius:'12px', textAlign:'center'}}>The health and safety of our employees, customers and communities is our top priority. &nbsp; <a style={{color:'#fff'}} href="">Learn More</a></div>


<div className="container" style={{padding:'0rem 4%', position:'relaltive'}}>

<h1 style={{textAlign: 'center',  margin:'0 0 1rem 0'}}>Pav &amp; Broome Fine Jewelry <br />
<span style={{textAlign:'center', margin:'0 auto', display:'block', maxWidth:'85vw'}}>The Coast's Official <em>Rolex</em> Jeweler has been the Gulf Coast’s source for fine diamonds &amp; gemstones, gifts, accessories, jewelry and watches for more than 40 years.</span>
</h1>

<input className="uiInput" type="checkbox" name="one" id="item-1" />
We are at your service to help you choose the <em>Rolex</em> watch that best suits you, within the wide range of <em>Rolex</em> timepieces. <label className="intro" htmlFor="item-1"></label>


  <div className="hide">


 <p>Our store in Gulfport is recognized as an Official <em>Rolex </em>Retailer, as we only sell genuine <em>Rolex</em> timepieces. </p>
<p>We understand what your investment in fine jewelry means, whether a gift for a momentous occasion or the timeless symbol of your undying love &amp; promise of forever and our commitment to you is your complete satisfaction throughout the process.</p>
<p>Pav &amp; Broome Fine Jewelry is not only a local, family-owned business but a staff of certified gemologists, horologists, craftsmen, jewelers and artisans prepared to guide you through the process of designing or finding the perfect piece for your occasion and answering any questions or concerns you may have along the way and forever after.</p>
<p>We offer a complete presentation that provides in-depth insight into the <a href="https://pavandbroome.com/services/education/diamond-buyers-guide/">5 C’s </a>(cut, color clarity, carat weight and, often the most important, confidence). We also show you diamond grading reports and explain why they’re so critical to understanding a diamond’s real value. Finally, we encourage you to shop around. We’re confident it will only affirm your decision to make us your premier jeweler.</p>
<p>We have enjoyed being a part of the Coast and this community’s special moments for generations and look forward to continuing to celebrate and grow with your family for many years to come.</p>
<p style={{textAlign: 'center', color:'#244d56', fontSize:'110%'}}><strong>Visit us today to see why Pav &amp; Broome Fine Jewelry is where the Coast gets engaged!</strong></p>
</div>


<div id="tudorbox" style={{justifyContent: 'space-around', marginTop:'2rem', borderTop:'1px solid #666', paddingTop:'1rem', justifyContent:'center'}}>


<h2 style={{textAlign:'center', fontSize:'150% !important'}}>Tudor Watches</h2>

<p>TUDOR offers mechanical watches with sophisticated style and proven reliability. The brand was established by Rolex founder Hans Wilsdorf as a watch with the style, character and quality of a Rolex, but at a more accessible price point.</p>

<div style={{position:'relative',}}>
<a href="/tudor/">



<Image alt="test" filename="tudor-banner.jpg" />

<a id="tudorcta" href="/tudor" style={{
  position:'absolute',
  top:'15%',
  right:'65px',
backgroundColor: '#cad3d6',
padding: '8px 15px',
border: '0.5px solid #486d69',
color: '#222',
fontSize: '1.1em',
textDecoration: 'none',
margin:'2rem 0',
}}>View the Collection</a>

</a>
</div>

</div>







{/* end of container */}
</div>



<h2 style={{textAlign:'center', marginTop:'2rem'}}>New Arrivals:</h2>
<div className="test flex" style={{padding:'0 4% 2rem 4%', border:'0px solid'}}>
  <div className="column"><a href="">ONE</a></div>
  <div className="column"><a href="">TWO</a></div>
  <div className="column"><a href="">THREE</a></div>
  <div className="column"><a href="">FOUR</a></div>
  <div className="column"><a href="">FIVE</a></div>
</div>








    </CustomBox>
  );
};

export default MainPage;
