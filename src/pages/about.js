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


<div style={{display:'block', height:'30vh', border:'0px solid blue'}}></div>

{/* <ul className="sidebarMenuInner">
				<li>
					<input id="ac-1" name="accordion-1" type="radio" />
					<label htmlFor="ac-1">About us</label>
					<article className="ac">
						<p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.</p>
					</article>
				</li>

				<li>
					<input id="ac-2" name="accordion-1" type="radio" />
					<label htmlFor="ac-2">How we work</label>
					<article className="ac">
						<p>Like you, I used to think the world was this great place where everybody lived by the same standards I did, then some kid with a nail showed me I was living in his world, a world where chaos rules not order, a world where righteousness is not rewarded. That's Cesar's world, and if you're not willing to play by his rules, then you're gonna have to pay the price. </p>
					</article>
				</li>
				<li>
					<input id="ac-3" name="accordion-1" type="radio" />
					<label htmlFor="ac-3">References</label>
					<article className="ac">
						<p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste htmlFor murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. </p>
					</article>
				</li>
				<li>
					<input id="ac-4" name="accordion-1" type="radio" />
					<label htmlFor="ac-4">Contact us</label>
					<article className="ac">
						<p>You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic. </p>
					</article>
				</li>
			</ul> */}



{/* <Contact /> */}
	
    </div>
    </section>

	</>
	</CustomBox>
  </Layout>
)

export default About
