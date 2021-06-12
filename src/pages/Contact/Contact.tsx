import React, { Fragment } from 'react';
import emailjs from 'emailjs-com'
import {
  Flex,
  Box, Heading, Text, FormControl, FormLabel, Textarea
} from '@chakra-ui/react'
import Input from './Input/'
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
      <Flex
        id="anime"
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      // onSubmit={sendEmail}
      >
        <Box
          backgroundColor="gray.700"
          px={4}
          width="94%"
          maxWidth="500px"
          borderRadius="sm"
          textAlign="center"
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
    <Heading>Contato</Heading>
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
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          placeholder="Insira o seu endereço de email"
        />
      </FormControl>
      <FormControl id="descricao">
        <FormLabel>Descrição:</FormLabel>
        <Input
          type="text"
          placeholder="Insira o sua descrição"
        />
      </FormControl>
      <FormControl id="text">
        <FormLabel>Texto:</FormLabel>
        <Textarea />
      </FormControl>
    </Box>
  )
}
export default Contact