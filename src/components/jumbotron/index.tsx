import React from 'react';
import {
  Container, Item, Inner, Pane, Title, SubTitle, Image,
} from './styles';

type JumboProps = { 
  children?: React.ReactNode; 
  resPropos?: React.ReactNode;
  direction?: string;
}

export default function Jumbotron({ children, direction = 'row', ...restProps }: JumboProps){
  return(
    <Item direction={direction} {...restProps} >
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }: JumboProps) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }: JumboProps) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }: JumboProps) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }: JumboProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({...restProps }: JumboProps) {
  return <Image {...restProps} />;
};