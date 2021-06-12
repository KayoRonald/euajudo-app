import React from 'react';
import {
  Input as ChakraInput,
  InputProps,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import {
  FiMail
} from 'react-icons/fi';
// type InpuProps = {
//   type?: string;
//   name?: string;
// }
const Input: React.FC<InputProps> = (props) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <InputGroup>
      <InputLeftElement
        width="3rem"
        height="100%"
        color={focus ? '#8257e5' : '#333'}
        children={<FiMail />}
        _focus={{ color: '#fff' }}
      />
      <ChakraInput
        {...props}
        required
        focusBorderColor="purple.500"
        backgroundColor="gray.800"
        onFocus={(): void => setFocus(true)}
        rounded="lg"
      />
    </InputGroup>
  )
}

export default Input