/** @jsx jsx */
/*eslint no-unused-vars: 0*/
import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Link as GatsbyLink } from 'gatsby';
import { jsx } from 'theme-ui';
import styled from '@emotion/styled/macro';
import { Flex, Box, Text, Heading } from 'rebass';

import substrDescription from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/substrDescription';

const Image = styled(GatsbyImage)``;

const StyledBox = styled(Box)`
  & ${Image} {
    transition-property: all;
    transition-duration: 1.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }

  // &:hover ${Image} {
  //   transform: scale(1.05);
  //   transition-property: all;
  //   transition-duration: 1.6s;
  //   transition-timing-function: ease-in-out;
  //   transition-delay: 0s;
  // }
`;

const MainPageCollectionBlock = props => {
  const {
    title,
    description,
    image,
    fields: { shopifyThemePath },
  } = props.collection;
  const { textColor = 'primary', textBgColor = 'white' } = props;

  return (
    <StyledBox sx={{ position: 'relative' }}>
      <Box sx={{ overflow: '' }} >
        {image ? (
          <Image fluid={image.localFile.childImageSharp.fluid} alt={title} />
        ) : (
          <Box />
        )}
      </Box>

      <Box
        sx={{
          position: ['absolute'],
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Flex
          sx={{
            flexDirection: ['column'],
            justifyContent: 'flex-end',
            alignItems: ['center', 'flex-start'],
            width: '100vw',
            height: '100%',
          }}
        >
          <Box
            width={['auto', 1 / 3]}
            sx={{
              ml: [1, '0%'],
              my: ['auto', '0%'],
              backgroundColor: [textBgColor, 'transparent'],
              opacity: [0.8, 1],
              px: ['3%', 0],
              py: ['2%', 0],
            }}
          >
            {' '}
            <GatsbyLink
              to={shopifyThemePath}
              sx={{
                color: textColor,
                textDecoration: 'none',
                display:'block',
                width:'100vw',
                height:'100vh',
                textShadow:'3px 2px 6px black',
                // border:'1px solid blue',
                ':hover,:focus,.active': {
                  color: textColor,
                  textDecoration: 'none',
                  positon:'absolute',
                },
              }}
      
            >
              <Heading
                as="h2"
                fontSize={[30, 36, 42]}
                textAlign={['center', 'left']}
               style={{textShadow:'3px 2px 6px black',}}>
                {title}
              </Heading>
              <Text fontSize={[1, 2, 3]} sx={{ display: ['none', 'block'] }} style={{textShadow:'3px 2px 6px black',}}>
                {substrDescription(description, 80)}
              </Text>
            </GatsbyLink>
          </Box>
        </Flex>
      </Box>
    </StyledBox>
  );
};

export default MainPageCollectionBlock;
