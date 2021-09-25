import React from 'react';
import Helmet from 'react-helmet';
import {
  Box, Heading, Container as ChakraContainer,
  Text, Button, Stack, Icon,
} from '@chakra-ui/react';
import { DiGithubBadge } from 'react-icons/di';
import { Container, Footer } from '../../containers';
import { Banner, Accordion } from '../../components';
import * as ROUTES from '../../constants/routes';
export default function Landing() {
  return (
    <React.Fragment key="key">
      <Helmet title="Eu Ajudo | Venha ajudar sua comunidade!" />
      <Box>
        <Box as="section" pt="6rem" pb={{ base: "0", md: "5rem" }}>
          <ChakraContainer maxW="107ch">
            <Box textAlign="center">
              <Heading
                maxW="16ch"
                mx="auto"
                fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                letterSpacing="tighter"
                mb="16px"
                lineHeight="1.2"
              >
                <Text
                  as="span"
                  bgClip="text"
                  bgGradient="linear(to-r, green.400,purple.500)"
                  position="relative"
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '20%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'black.400',
                    zIndex: -1,
                  }}
                >
                  Eu Ajudo
                </Text>
                <br />{' '}
                <Text color="green.400" as="span">
                  registre seus pontos
                </Text>{' '}
              </Heading>
              <Text
                maxW="700px"
                mx="auto"
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                Encontrar ou tornar visíveis os pontos de ajudas nunca foi tão fácil.
                Comece a Encontrar Adicionar um novo ponto de vacinação ou de doações.
              </Text>
              <Stack
                mt="10"
                spacing="4"
                justify="center"
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  h="4rem"
                  px="40px"
                  fontSize="1.2rem"
                  as="a"
                  size="lg"
                  bg="purple.500"
                  target="__blank"
                  href={ROUTES.APPMAP}
                  _hover={
                    { backgroundColor: 'purple.400' }
                  }
                >
                  Eu Ajudo
                  <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                    />
                  </Icon>
                </Button>
                <Button
                  as="a"
                  size="lg"
                  h="4rem"
                  px="40px"
                  fontSize="1.2rem"
                  href={ROUTES.GITHUB}
                  target="__blank"
                  leftIcon={<DiGithubBadge />}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </ChakraContainer>
        </Box>
      </Box>
      <Container />
      <Accordion />
      <Banner />
      <Footer />
    </React.Fragment>
  );
}
