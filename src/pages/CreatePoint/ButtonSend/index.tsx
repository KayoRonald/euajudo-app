import React from 'react';
import { GrWaypoint } from 'react-icons/gr';

import { Button, ButtonProps as ChakraProps } from '@chakra-ui/react';
type ButtonProps = ChakraProps & {
  loading: boolean;
};

const ButtonSend: React.FC<ButtonProps> = ({ loading }) => {
  return (
    <Button
      type="submit"
      width="full"
      mt={4}
      outline="none"
      _hover={{ backgroundColor: 'purple.600' }}
      backgroundColor="purple.500"
      leftIcon={<GrWaypoint />}
      isLoading={loading}
      disabled={loading}
      loadingText="Loading...."
    >
      Enviar
    </Button>
  );
};

export default ButtonSend;