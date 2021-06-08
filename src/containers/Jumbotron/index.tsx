import React from 'react';
import { Jumbotron } from '../../components';
import jumboData from '../../json/jumbo.json';

// import { Container } from './styles';
interface PropsJumbo {
  id?: number;
  subTitle?: string;
  image?: String;
  src?: string;
  alt?: string;
  direction?: string;
}
// : React.FC<PropsJumbo> = (props): JSX.Element
const Container: React.FC<PropsJumbo> = ({ id, subTitle, image, src, alt, direction }) => {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image id={`id${item.id}`} src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}

export default Container;