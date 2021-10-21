import React from 'react';
import { Cell, Container } from '../Grid';
import Link from '../Link';

const Footer = () => {
  return (
    <Container flexDirection="column" padding="20px 0">
      <Cell>
        <Link data-auto-recognition="true" href="mailto:contacto@ibcaminandoconjesus.cl">
          contacto@ibcaminandoconjesus.cl
        </Link>
      </Cell>
      <Cell>
        <Link data-auto-recognition="true" href="tel:+569 99941126">
          +569 99941126
        </Link>
      </Cell>
    </Container>
  );
};

export default Footer;
