import React from 'react';
import { Navigate } from "react-router-dom";
import {NavLink} from "react-router-dom";
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://wallpapercave.com/wp/wp9659815.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-bl, blackAlpha.900, transparent)'}>
          <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '6xl' })}>
              View Your Favourite Anime
            </Text>
          </Stack>

          <Stack direction={'row'} align={'center'}>
              <NavLink to="/app">
              <Button
                size={'lg'}
                variant='solid'
                bg={'blackAlpha.900'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
              </NavLink>
            </Stack>

        </VStack>
      </Flex>
    );
  }
  