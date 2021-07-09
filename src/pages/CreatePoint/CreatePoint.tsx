import React, { Fragment} from 'react'
import Helmet from 'react-helmet';
// import {
//   Flex,
//   Box, Heading, Text,
//   FormControl, FormLabel,
//   Textarea, Button
// } from '@chakra-ui/react';

const CreatePoint: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Eu Ajudo | Cadastramentos de pontos</title>
      </Helmet>
      <h1>Create point</h1> 
    </Fragment>
  )
}

export default CreatePoint;