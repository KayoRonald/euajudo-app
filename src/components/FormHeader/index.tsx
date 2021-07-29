import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

type FormPorps ={
  heading: string;
  text: string;
}

const FormHeader: React.FC<FormPorps> = ({ heading, text }) => {
  return (
    <Box textAlign="center">
      <Heading mb={2}>{heading}</Heading>
      <Text>{text}</Text>
    </Box>
  );
};

export default FormHeader;