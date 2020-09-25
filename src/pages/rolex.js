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
      margin: "-110px auto 0 auto",
      justifyContent: "space-around",
      
    }}
  >
    {/* <div>
      <iframe src="https://iframe.paradedesign.com/" title="dummy" style={{width:'100vw',height:'100vh'}}></iframe>

  </div> */}

<Helmet>

<script id="rlx-corner">{`
        (function(b,c,a,d,f,g,h,k,l){var e=c.getElementsByTagName(a)[0];a=c.createElement(a);var m=function(a){delete b[d];a(c.getElementById(f),[g,k,h,l])};b[d]=b[d]||m;a.async=!0;a.src="https://corners.rolex.com/rlx-corner.js";e.parentNode.insertBefore(a,e)})(window,document,"script","rlxCornerCallback","rlx-corner","d8039e0fd25ac17bfcc3a0957d0c06bd","https://pavandbroome.com/privacy-policy/","en");
    `}</script>
    
<script>{`RLX = { legalURL: "https://pavandbroome.com/privacy-policy/" }`}
</script>
</Helmet>





<section className="content official-rolex-jeweler"></section>



    </div>
    </section>
  </Layout>
)

export default Rolex
