import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedin,
} from 'react-icons/ti';

import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minHeight={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children="@vishalParmar"
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize={50}
        >
          <a href="https://www.youtube.com" target={'blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-parmar-9582b2171/"
            target={'_blank'}
          >
            <TiSocialLinkedin />
          </a>
          <a href="https://www.instagram.com/me_vishal.25" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://www.github.com/vishal25899" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
