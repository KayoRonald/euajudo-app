import React, { Fragment } from 'react';
// import emailjs from 'emailjs-com'
import {
  Flex,
  Box, Heading, Text, 
  FormControl, FormLabel, 
  Textarea, Button
} from '@chakra-ui/react';
import Input from './Input/';
import { 
  AiOutlineUserDelete, 
  AiOutlineMail,
  AiFillFileText 
} from 'react-icons/ai';
import Helmet from 'react-helmet';
const Contact: React.FC = () => {
  // function sendEmail(event: any) {
  //   event.preventDefault();
  //   emailjs.sendForm('service_wsv412a', 'template_f93alnj', event.target, 'user_U7x2lQJjgnPqWvd7IP2WD')
  //     .then((result) => {
  //       alert("E-mail enviado com sucesso!");
  //       console.log("sucess" + result.text);
  //     }, (error) => {
  //       alert("Ocorreu algum erro com nossa api :(");
  //       console.log(error.text);
  //     });
  //   event.target.reset()
  // }
  return (
    <Fragment>
      <Helmet title="Eu Ajudo | Contato" />
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
          as="form"
          width="94%"
          maxWidth="500px"
          borderRadius="sm"
          textAlign="center"
          // onSubmit={sendEmail}
        >
          <Box p={4}>
            <FormHeader />
            <ContactForm />
          </Box>
        </Box>
      </Flex>
    </Fragment>
  )
}
const FormHeader = () => (
  <Box textAlign="center">
    <Heading mb={2}>Contato</Heading>
    <Text>Detalhe o seu problema</Text>
  </Box>
)

const ContactForm = () => {
  return (
    <Box my={8} textAlign="left">
      <FormControl id="nome">
        <FormLabel>Nome:</FormLabel>
        <Input
          type="text"
          placeholder="Insira o seu nome"
          iconLeft={<AiOutlineUserDelete/>}
        />
      </FormControl>
      <FormControl id="email" mt={2}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          placeholder="Insira o seu endereço de email"
          iconLeft={<AiOutlineMail/>}
        />
      </FormControl>
      <FormControl id="descricao" mt={2}>
        <FormLabel>Descrição:</FormLabel>
        <Input
          type="text"
          placeholder="Insira a sua descrição"
          iconLeft={<AiFillFileText/>}
        />
      </FormControl>
      <FormControl id="text" mt={2}>
        <FormLabel>Texto:</FormLabel>
        <Textarea placeholder="Coloque o seu texto aqui"/>
      </FormControl>
      <ButtonSend/>
    </Box>
  )
}

const ButtonSend = () =>{
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
  )
}
export default Contact