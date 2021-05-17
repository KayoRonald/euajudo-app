import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './style'

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <img
        src="https://ibook-omega.vercel.app/_nuxt/img/404.f55c522.svg"
        alt="Error 404"
      />
      <div className="text">
        <span>A página que você está procurando não existe ou foi removida</span>
      </div>
      <div className="button">
        <Link to="/"> Voltar para Home </Link>
      </div>
    </Container>
  )
}

export default PageNotFound;