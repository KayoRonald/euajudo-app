import React from 'react';
import {
  Container, Item, Inner, Pane, Title, SubTitle, Image,
} from './styles';

type JumbotronProps = {
  children?: React.ReactNode;
  directions?: string;
  direction?: React.ElementType;
}

export default function Jumbotron({ children, directions = 'row', ...restProps }: JumbotronProps) {
  return (
    <Item direction={directions} {...restProps}>
      <Inner direction={directions}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }: JumbotronProps) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }: JumbotronProps) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }: JumbotronProps) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }: JumbotronProps) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};