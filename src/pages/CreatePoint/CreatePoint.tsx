import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import {
  Flex,Box
} from '@chakra-ui/react';
import ContactForm from './ContactForm/'
import FormHeader from '../../components/FormHeader/'

const CreatePont: React.FC = () => {
  return (
    <Fragment>
      <Helmet title="Eu Ajudo | Criação de Pontos" />
      <Flex
        id="anime"
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          as="form"
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
    </Fragment>
  )
}

export default CreatePont