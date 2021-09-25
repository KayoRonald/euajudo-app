import React from 'react';
import { Jumbotron } from '../../components';
import { JumboData } from '../../data/jumbo/';

const Container: React.FC = () => {
  return (
    <Jumbotron.Container>
      {JumboData.map((item) => (
        <Jumbotron key={item.id} directions={item.directions}>
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
  );
};

export default Container;