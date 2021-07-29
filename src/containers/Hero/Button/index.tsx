import React from 'react';
import { HStack, Text, Box } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import * as ROUTES from '../../../constants/routes';
export default function Button() {
  return (
    <HStack
      mt="6"
      as="a"
      bg="whiteAlpha.300"
      rounded="md"
      px="8"
      py="3"
      href={ROUTES.APPMAP}
      color="white"
      fontSize="lg"
      fontWeight="semibold"
      transition="all 0.2s"
      style={{ justifyContent: 'center' }}
      target="_blank"
    >
      <Text>Eu Ajudo</Text>
      <Box as={AiOutlineArrowRight} display="inline-block" ml="2" />
    </HStack>
  );
};