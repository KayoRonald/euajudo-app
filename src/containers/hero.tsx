import React from 'react'
// import { AiOutlineArrowRight, AiOutlineTeam } from 'react-icons/ai'
import {
  Box,
  Container, chakra, Text, Stack, Flex, Image
} from '@chakra-ui/react';
import help from '../image/svg/undraw_medical_care_movn.svg'
import Button from '../components/Button/Button'
const Hero: React.FC = () => {
  return (
    <Box as="section" bg="rgb(14, 15, 19)">
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: '1200px' }}
        m="0 auto"
      >
        <Flex
          align="center"
          justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
          direction={{ base: 'column', md: 'row' }}
          // flexWrap="no-wrap"
          minH="70vh"
          px={4}
          mb={16}
        >
          <Box
            pb="3rem"
            mb={3}
            mt={8}
          >
            <Container>
              <Box aling="center">
                <chakra.h1
                  maxW="16ch"
                  mx="auto"
                  fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                  letterSpacing="tighter"
                  fontWeight="extrabold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Eu Ajudo
              </chakra.h1>
                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  mt="6"
                >
                  Venha colaborar com a sua comunidadee!
              </Text>
              </Box>
              <Stack direction='column' spacing={4} mt={3}>
                <Button/>
              </Stack>
            </Container>
          </Box>
          <Box
            w={{ base: '80%', sm: '60%', md: '50%' }}
            mb={{ base: 12, md: 0 }}
            display={{ base: 'none', sm: 'block' }}
          >
            <Image
              src={help}
              size="100%"
              rounded="1rem"
              shadow="2xl"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Hero
