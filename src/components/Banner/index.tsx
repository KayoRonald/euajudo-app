import React from 'react';
import { Box, Container, Flex, Heading, Text, Image, Center, Button } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import bannerImg from '../../image/undraw_version.svg';
import * as ROUTES from '../../constants/routes';
const Banner: React.FC = () => {
  return (
    <Box as="section" bg="#0e0f13" color="white" overflow="hidden" pb={3}>
      <Container pt="5px" pb="0" maxW="80ch">
        <Flex align="center" direction="column" textAlign="center" mb="10">
          <Heading
            mt="4"
            fontWeight="extrabold"
            size="3xl"
            mx="auto"
            letterSpacing="tighter"
          >
            <Box
              as="span"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
            >
              Venhar
            </Box>{' '}
            participar!
          </Heading>
          <Center mb="5px">
            <Text maxW="48ch" mx="auto" fontSize="lg" mt="6" opacity={0.8}>
              Venha colaborar com a sua comunidade! Somos de código aberto.
            </Text>
          </Center>
          <Button
            mt="6"
            as="a"
            bg="whiteAlpha.300"
            rounded="md"
            px="8"
            py="3"
            color="white"
            fontSize="lg"
            fontWeight="semibold"
            transition="all 0.2s"
            _hover={{ bg: "whiteAlpha.400" }}
            maxW="40%"
            href={ROUTES.DISCORD}
            target="__blank"
            w="full"
            leftIcon={<AiFillGithub />}
          >
            GITHUB
          </Button>
        </Flex>
        <Center>
          <Image
            src={bannerImg}
            layout="responsive"
            width="500"
            height="220"
          />
        </Center>
      </Container>
    </Box>
  );
};

export default Banner;
