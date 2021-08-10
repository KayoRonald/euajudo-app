import React from 'react';
import { GrInfo } from 'react-icons/gr';
import { Alert, Text, Icon } from '@chakra-ui/react';

const AlertPoint: React.FC = () => {
  return (
    <Alert status="info" mt={4} borderRadius={2}>
      <Icon as={GrInfo} />
      <Text paddingLeft={2} color="primary.200" fontWeight="bold">Escolhar um local no mapa</Text>
    </Alert>
  );
};

export default AlertPoint;