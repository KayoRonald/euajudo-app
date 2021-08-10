import React from 'react';
import { FormControl as ChakraControl, FormLabel } from '@chakra-ui/react';
type FormProps = {
  children?: React.ReactNode;
  name: string;
  mt?: number;
  id: string;
};

const FormControl: React.FC<FormProps> = ({ children, name, mt, id }) => {
  return (
    <ChakraControl mt={mt} id={id}>
      <FormLabel>{name}</FormLabel>
      {children}
    </ChakraControl>
  );
};

export default FormControl;