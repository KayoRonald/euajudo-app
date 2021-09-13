import React from 'react';
import emailjs from 'emailjs-com';
import {
  Flex,
  Box, FormControl, FormLabel,
  Textarea, Button,
} from '@chakra-ui/react';
import swal from 'sweetalert';
import {
  AiOutlineUserDelete,
  AiOutlineMail,
  AiFillFileText,
} from 'react-icons/ai';
import Helmet from 'react-helmet';
import { Input, FormHeader } from '../../components';
const Contact: React.FC = () => {
  function sendEmail(event: any) {
    event.preventDefault();
    emailjs.sendForm('service_wsv412a', 'template_f93alnj', event.target, 'user_U7x2lQJjgnPqWvd7IP2WD')
      .then((result) => {
        swal("Bom trabalho!", "E-mail enviado com sucesso!", "success");
      }, (error) => {
        swal("Ops!", "Ocorreu algum erro com nossa api :(", "error");
      });
    event.target.reset();
  }
  return (
    <React.Fragment key="key">
      <Helmet title="Eu Ajudo | Contato" />
      <Flex
        id="anime"
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          as="form"
          onSubmit={() => sendEmail}
          backgroundColor="gray.700"
          px={4}
          width="94%"
          maxWidth="500px"
          borderRadius="sm"
          textAlign="center"
        >
          <Box p={4}>
            <FormHeader
              heading="Contato"
              text="Detalhe o seu problema"
            />
            <ContactForm />
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

const ContactForm = () => {
  return (
    <Box my={8} textAlign="left">
      <FormControl id="nome">
        <FormLabel>Nome:</FormLabel>
        <Input
          type="text"
          placeholder="Insira o seu nome"
          name="name"
          iconLeft={<AiOutlineUserDelete />}
        />
      </FormControl>
      <FormControl id="email" mt={2}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Insira o seu endereço de email"
          iconLeft={<AiOutlineMail />}
        />
      </FormControl>
      <FormControl id="descricao" mt={2}>
        <FormLabel>Descrição:</FormLabel>
        <Input
          type="text"
          name="subjetc"
          placeholder="Insira a sua descrição"
          iconLeft={<AiFillFileText />}
        />
      </FormControl>
      <FormControl id="text" mt={2}>
        <FormLabel>Texto:</FormLabel>
        <Textarea
          placeholder="Coloque o seu texto aqui"
          name="message"
          required
        />
      </FormControl>
      <ButtonSend />
    </Box>
  );
};

const ButtonSend = () => {
  return (
    <Button
      type="submit"
      width="full"
      mt={4}
      outline="none"
      _hover={{ backgroundColor: 'purple.600' }}
      backgroundColor="purple.500"
    >
      Enviar
    </Button>
  );
};

export default Contact;