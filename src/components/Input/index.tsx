import React from 'react';
import {
  Input as ChakraInput,
  InputProps,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

type InputPropsApp = InputProps &{
  placeholder?: string;
  type?: string;
  iconLeft?: JSX.Element;
  name?: string;
}

const Input: React.FC<InputPropsApp> = ({ iconLeft, placeholder, type, name, ...props }) => {
  const [focus, setFocus] = React.useState<boolean>(false);
  return (
    <InputGroup>
      <InputLeftElement
        width="3rem"
        height="100%"
        color={focus ? '#8257e5' : '#333'}
        children={iconLeft}
        _focus={{ color: '#fff' }}
      />
      <ChakraInput
        required
        name={name}
        type={type}
        placeholder={placeholder}
        focusBorderColor="purple.500"
        backgroundColor="gray.800"
        onFocus={(): void => setFocus(true)}
        rounded="lg"
        {...props}
      />
    </InputGroup>
  );
};

export default Input;