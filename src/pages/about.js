import React from 'react'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga';
import Layout from '../@gatsbystorefront/gatsby-theme-storefront-shopify/components/Layout'
import Contact from '../Components/Contact'
import Image from '../Components/Image'
import styled from "styled-components"
const CustomBox = styled.div`


// .iframe-container {overflow: hidden;padding-top: 56.25%;position: relative;}

// .iframe-container iframe {border: 0;height: 100%;left: 0;position: absolute;top: 0;width: 100%;}






.sidebarMenuInner label {
    cursor: pointer;
}
.sidebarMenuInner input {
    display: none;
}
.sidebarMenuInner article {

    margin-top: -1px;
    overflow: hidden;
    height: 0;
    transition: height 0.3s ease-in-out,box-shadow 0.6s linear;
}



.sidebarMenuInner input:checked ~ article {
    height: auto;
}





`

const initializeReactGA = googleAnalyticsId => {
	ReactGA.initialize(googleAnalyticsId);
	if (typeof window !== `undefined`) {
	  ReactGA.pageview(window.location.pathname + window.location.search);
	}
  };

const About = () => (
  <Layout>
	  <CustomBox>

<>

<div className="iframe-container">
<iframe loading="lazy" className="video" title="Iframe Content"src="https://www.youtube.com/embed/7fyqJT8QDBY" scrolling="yes" style={{height:'59vh', width:'100%'}}></iframe>
</div>




    <section className="outer section section--gradient">

      <div className="container" style={{padding: '60px 2rem 0 2rem',}}>
      <h1>About</h1>

	 



	<p>Pav &amp; Broome Fine Jewelry, a local family-owned jeweler has been helping Mississippi Gulf Coast residents make memories meant to last htmlFor more than 45 years. Whether you are looking to propose, promote, promise, or just surprise, Pav &amp; Broome Fine Jewelry offers the largest selection of fine engagement and bridal jewelry on the Gulf Coast from the most prestigious designers such as Gabriel &amp; Co., Simon G. and more.</p>

	<p>Our mission is to help our customers create moments meant to last and celebrate life’s milestones with quality fine jewelry, watches, gifts, and accessories through exceptional customer service and a commitment to complete customer satisfaction. We’re glad you noticed. Thank you htmlFor voting Pav &amp; Broome Fine Jewelry your favorite jeweler again. We feel the same way about you! We are honored to have been awarded the designation of the Gulf Coast’s “Favorite Local Jeweler” by Biloxi’s own People’s Choice Awards htmlFor the 6th time.</p>

	<Image filename="3-075-0619-PPLs-Choice-6x-e1591979463725.jpg" />

	<p>htmlFor those who desire a custom design creation, our artisans will work with you to bring your ideas to life in a piece as special and unique as you, one that you will be proud to pass on to future generations. Whether you want to create a unique engagement ring, necklace or other jewelry, or you want to bring a family heirloom back to its original glory or re-purpose a vintage piece to match your personality, Pav &amp; Broome’s CAD certified and professional jewelry designers will make the process an enjoyable experience you’ll treasure.</p>

	<p>With its beginnings in 1973 as a watch and jewelry repair trade shop, this family business quickly grew and became the premier jeweler on the Coast, finally settling into its beautiful 4,000  sq. ft. brick and mortar storefront at 1912 25th Ave. in downtown Gulfport. Known as much htmlFor their honesty, integrity, and customer service, as their exquisite collection of fine jewelry and Swiss timepieces, Pav &amp; Broome Fine Jewelry takes pride in finding just the right piece htmlFor your special occasion. They do not take lightly the responsibility htmlFor ensuring the customer’s complete satisfaction behtmlFore, during, and long after the sale. “These are our friends and neighbors, and we want to do right by them.”</p>


	<p>Beyond the vast selection of designer fashion and bridal jewelry, men’s and ladies’ watches, gifts and accessories available at Pav &amp; Broome Fine Jewelry, they offer in-house services such as jewelry and watch repair by their certified horologists, master jewelers and gemologists, appraisals, engraving, custom design and so much more.  Pav &amp; Broome is known htmlFor its quality customer care -service after the sale- including but certainly not limited to cleaning, inspection, maintenance, service and repair services, appraisals, as well as inhtmlFormation on how to best care htmlFor your watches &amp; jewelry. We hope you will visit us on Hwy 49 in downtown Gulfport and see why this is where the Coast gets engaged.</p>


	<h2>Mission Statement</h2>

	<p>Our mission is to help our customers create moments meant to last and celebrate life’s milestones with quality fine jewelry, watches, gifts, and accessories through exceptional customer service and a commitment to complete customer satisfaction.</p>

<h2>Hours</h2>

	<p>Thank you htmlFor visiting our website, and htmlFor your interest in Pav &amp; Broome Fine Jewelry. We are excited to announce we’re now open
9:00 a.m.- 5:00 p.m., Monday – Friday, and prepared to provide our customers and staff a safe and comhtmlFortable shopping experience.</p>


	<p>Monday – Friday
9:00 a.m. – 5:00 p.m
<br />
Saturday
9:00 a.m. – 1:00 p.m.
<br />
Sunday
Closed</p>


<iframe title="location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.1870005935!2d-89.09477208492169!3d30.374047409881573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c17d83754533d%3A0xbc27b3c5fcecdf42!2sPav%20%26%20Broome%20Fine%20Jewelry-Official%20Rolex%20Jeweler!5e0!3m2!1sen!2sus!4v1596421047153!5m2!1sen!2sus" width="100%" height="200" frameborder="0" ariaHidden="false"></iframe>


{/* <div style={{display:'block', height:'30vh', border:'0px solid blue'}}></div> */}





<Contact />
	
    </div>
    </section>

	</>
	</CustomBox>
  </Layout>
)

export default About
