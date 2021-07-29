import React from 'react';
import { Center, Container, Heading, Spinner, Box } from '@chakra-ui/react';

const SpinnerPage: React.FC = () => {
  return (

    <Container
      h="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      bg="#000"
    >
      <Box display="inline-block">
        <Heading
          id="spinnerText"
          bgClip="text"
          fontWeight="extrabold"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
        >
          Eu Ajudo
        </Heading>
        <Center mt={7}>
          <Spinner
            thickness="4px"
            speed="0.40s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </Box>
    </Container>
  );
};

export default SpinnerPage;