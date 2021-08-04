import React from 'react';
import Helmet from 'react-helmet';
import {
  Flex, Box,
} from '@chakra-ui/react';
import ContactForm from './ContactForm/';
import FormHeader from '../../components/FormHeader/';
import { Footer } from './styles/styles';
const CreatePont: React.FC = () => {
  return (
    <React.Fragment key="key">
      <Helmet title="Eu Ajudo | Criação de Pontos" />
      <Flex
        id="anime"
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          backgroundColor="gray.700"
          px={4}
          width="94%"
          maxWidth="700px"
          mt={6}
          borderRadius="sm"
          textAlign="center"
          mb={6}
        >
          <Box p={4}>
            <FormHeader
              heading="Criação de Pontos"
              text="Vem ajudar sua comunidade!"
            />
            <ContactForm />
          </Box>
        </Box>
      </Flex>
      <Footer>
        <h4
          style={{ color: '#8092A8', fontWeight: 400 }}
        >© 2021 - Desenvolvido por Eu Ajudo
        </h4>
      </Footer>
    </React.Fragment>
  );
};

export default CreatePont;