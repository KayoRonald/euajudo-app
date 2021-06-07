import React from 'react'
import { HStack, Text, Box } from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Button() {
  return (
    <HStack
      mt="6"
      as="a"
      bg="whiteAlpha.300"
      rounded="md"
      px="8"
      py="3"
      href="/"
      color="white"
      fontSize="lg"
      fontWeight="semibold"
      transition="all 0.2s"
      style={{justifyContent: 'center'}}
    >
      <Text>Eu Ajudo</Text>
      <Box as={AiOutlineArrowRight} display="inline-block" ml="2" />
    </HStack>
  )
}