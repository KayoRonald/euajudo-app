import React from 'react';
import {
  Input as ChakraInput,
  InputProps,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';

interface InputPropsApp extends InputProps {
  placeholder?: string;
  type?: string;
  iconLeft?: JSX.Element;
}
const Input: React.FC<InputPropsApp> = ({ iconLeft, placeholder, type, ...props }) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <InputGroup
      {...props}
    >
      <InputLeftElement
        width="3rem"
        height="100%"
        color={focus ? '#8257e5' : '#333'}
        children={iconLeft}
        _focus={{ color: '#fff' }}
      />
      <ChakraInput
        required
        type={type}
        placeholder={placeholder}
        focusBorderColor="purple.500"
        backgroundColor="gray.800"
        onFocus={(): void => setFocus(true)}
        rounded="lg"
      />
    </InputGroup>
  )
}

export default Input