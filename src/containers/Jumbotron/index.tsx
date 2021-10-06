import React from 'react';
import { Jumbotron, PageTransition } from '../../components';
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
            <PageTransition>
              <Jumbotron.Image id={`id${item.id}`} src={item.image} alt={item.alt} />
            </PageTransition>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default Container;