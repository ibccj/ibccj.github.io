import React from 'react';
import { Cell, Container } from '../Grid';

export default function Wrapper({ children }) {
  return (
    <Container
      maxWidth="1280px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
    >
      <Cell>{children}</Cell>
    </Container>
  );
}
