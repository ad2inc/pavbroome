import React from 'react';
import { ThemeProvider, Styled } from 'theme-ui';
import Helmet from 'react-helmet';
import { Flex, Box } from 'rebass';
import ReactGA from 'react-ga';
import { useStaticQuery, graphql } from 'gatsby';

import {
  MenuContextProvider,
  useMenuContext,
} from '../components/Menu/context';


import {
  SearchContextProvider,
  useSearchContext,
} from '../components/Search/context';

import Navbar from './Navbar';
import Footer from './Footer';
import theme from '../gatsby-plugin-theme-ui/index';
import "fontsource-merriweather"

import './reset.css';
// import "../../../css/index.css"
import "../../../css/default.css"

const initializeReactGA = googleAnalyticsId => {
  ReactGA.initialize(googleAnalyticsId);
  if (typeof window !== `undefined`) {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
};

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query layoutStaticQueryAndLayoutStaticQuery {
        site {
          siteMetadata {
            gatsbyStorefrontConfig {
              googleAnalyticsId
            }
          }
        }
      }
    `
  );

  const { googleAnalyticsId } = data.site.siteMetadata.gatsbyStorefrontConfig;

  initializeReactGA(googleAnalyticsId);

  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <MenuContextProvider>
          <SearchContextProvider>
            <LayoutComponents children={children} />
          </SearchContextProvider>
        </MenuContextProvider>
      </Styled.root>
    </ThemeProvider>
  );
};

const LayoutComponents = ({ children }) => {
  const { menuShowed } = useMenuContext();
  const { searchShowed } = useSearchContext();
  return (
    <Box
      bg="background"
      sx={{
        position: menuShowed || searchShowed ? 'fixed' : 'relative',
        overflow: menuShowed || searchShowed ? 'hidden' : 'visible',
        width: '100%',
      }}
    >
      <Helmet>
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
<meta http-equiv='cache-control' content='no-cache' /> 
<meta http-equiv='expires' content='0' /> 
<meta http-equiv='pragma' content='no-cache' /> 
      </Helmet>

      <Flex flexDirection="column" style={{ minHeight: '100vh' }}>
        <Navbar />
        <Box
          as="main"
          flex="1"
          width={1}
          style={{ maxWidth: 1300, height: '100%' }}
          mx="auto"
          mt={['40px', '6.2vh']}
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
