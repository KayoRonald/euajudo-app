import React from 'react';

import {
  Container, Row, Column, Texto, Title, Text, Break,
} from './footer';

type LayoutProps = {
  children?: React.ReactNode;
}

export default function Footer({ children, ...resPropos }: LayoutProps) {
  return <Container {...resPropos}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }: LayoutProps) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: LayoutProps) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Texto = function FooterTexto({ children, ...restProps }: LayoutProps) {
  return <Texto {...restProps}>{children}</Texto>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: LayoutProps) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Title = function FooterText({ children, ...restProps }: LayoutProps) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }: LayoutProps) {
  return <Break {...restProps} key="1" />;
};