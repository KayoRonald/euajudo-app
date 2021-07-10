import React from 'react'

import { 
  Circle as ChakraCircle
} from '@chakra-ui/react'

type CircleProps = {
  children?: React.ReactNode;
  link?: string;
}

const Circle: React.FC<CircleProps> = ({ children, link }) => {
  return (
    <ChakraCircle
      target="_blank"
      as="a"
      rel="noopener"
      size="40px"
      bg="purple.500"
      shadow="lg"
      href={link}
    >
      {children}
    </ChakraCircle>
  )
}

export default Circle