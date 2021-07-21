import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  Heading
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Hero, Header } from './styles';
const NavBar: React.FC = () => {
  return (
    <Hero>
      <Header>
        <Link to="/">
          <Heading display="inline-flex" fontSize="19px">
            <AiOutlineArrowLeft />
            {' '}
            Voltar
          </Heading>
        </Link>
      </Header>
    </Hero>
  )
}

export default NavBar