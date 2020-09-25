import React from 'react';
import { Flex, Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';

import MainPageCarousel from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageCarousel';
import MainPageCollectionBlock from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageCollectionBlock';
import MainPageProductBlock from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageProductBlock';

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


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



  const slideImages = [
    '../../../images/slide-1.jpg',
    '../../../images/slide-2.jpg',
    '../../../images/slide-3.jpg'
  ];
   
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>
      )
  }

  const { mainPage } = dataQuery.site.siteMetadata.gatsbyStorefrontConfig;

  const { data } = props;

  return (
    <div style={{width:'100vw', overflow:'hidden'}}>
    <Flex flexWrap="wrap" px={0} pt={0} mx="auto" style={{ maxWidth: 1300 }}>
      {mainPage.map((block, index) => {
        if (block.type === 'carousel') {
          return (
            <Box width={1} p={1} key={index}>
              <MainPageCarousel carousel={block} data={data} />
            </Box>
          );
        } else if (block.type === 'header') {
          return '';
        } else if (
          block.type === 'collection' &&
          data.collections.nodes.filter(
            collection => collection.handle === block.handle
          )[0]
        ) {
          return (
            <Box width={[1, 1 / 2]} p={1} key={index}>
              <MainPageCollectionBlock
                collection={
                  data.collections.nodes.filter(
                    collection => collection.handle === block.handle
                  )[0]
                }
                textColor={block.textColor}
                textBgColor={block.textBgColor}
              />
            </Box>
          );
        } else if (
          block.type === 'product' &&
          data.products.nodes.filter(
            product => product.handle === block.handle
          )[0]
        ) {
          return (
            <Box width={[1, 1 / 2]} p={1} key={index}>
              <MainPageProductBlock
                product={
                  data.products.nodes.filter(
                    product => product.handle === block.handle
                  )[0]
                }
                textColor={block.textColor}
                textBgColor={block.textBgColor}
              />
            </Box>
          );
        } else {
          return '';
        }
      })}




    </Flex>
    </div>
  );
};

export default MainPage;
