import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../@gatsbystorefront/gatsby-theme-storefront-shopify/components/Layout'

const Rolex = () => (
  <Layout>
    <section className="outer section section--gradient">


	  <div
    style={{
      display: "flex",
      alignContent: "center",
      margin: "0 auto 0 auto",
      justifyContent: "space-around",
      
    }}
  >
    {/* <div>
      <iframe src="https://iframe.paradedesign.com/" title="dummy" style={{width:'100vw',height:'100vh'}}></iframe>

  </div> */}


<iframe title="location map" src="https://pavandbroome.netlify.app/rolex.html" width="100%" height="100vh" frameborder="0" ariaHidden="false" style={{width:'100vw',height:'100vh'}}></iframe>





<section className="content official-rolex-jeweler"></section>



    </div>
    </section>
  </Layout>
)

export default Rolex
