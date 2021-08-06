import React from 'react';
import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text, Image, Center, HStack } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import bannerImg from '../../image/undraw_version.svg';
import * as ROUTES from '../../constants/routes';
const Banner: React.FC = () => {
  return (
    <Box as="section" bg="#0e0f13" color="white" overflow="hidden" mt={5}>
      <Container pt="5px" pb="0" maxWidth="80ch">
        <Flex align="center" direction="column" textAlign="center" mb="10">
          <Heading
            mt={4}
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
              Vem Participar
            </Box>{' '}
            Você também!
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={2} mt={3}>
            <Box
              padding={7}
              borderRadius="4px"
              key="5"
            >
              <Stack direction="row" spacing={6}>
                <Stack spacing={3} maxW="320px">
                  <Box>
                    <Text fontWeight="bold" fontSize="19px" alignItems="inherit">
                      Eu Ajudo, venha participar você também!
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Center>
              <Box
                w={{ base: '90%', sm: '60%', md: '100%' }}
                mb={{ base: 12, md: 0 }}
                display={{ base: 'none', sm: 'block' }}
              >
                <Image
                  src={bannerImg}
                  size="1000px"
                  rounded="1rem"
                  shadow="2xl"
                  width="1000px"
                />
              </Box>
            </Center>
          </SimpleGrid>
          <HStack
            mt="6"
            as="a"
            bg="whiteAlpha.300"
            rounded="md"
            px="8"
            py="3"
            href={ROUTES.APPGITHUB}
            color="white"
            fontSize="lg"
            fontWeight="semibold"
            width="20rem"
            transition="all 0.2s"
            style={{ justifyContent: 'center' }}
          >
            <Text>Github</Text>
            <Box as={AiFillGithub} display="inline-block" ml="2" />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;