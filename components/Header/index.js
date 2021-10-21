import React from 'react';
import { Cell, Container } from '../Grid';
import Link from '../Link';

export default function Header() {
  return (
    <Container padding="30px 0" justifyContent="center" alignItems="center">
      <Cell>
        <Link href="/">Inicio</Link>
      </Cell>
      <Cell>
        <Link href="/iglesia">Iglesia</Link>
      </Cell>
      <Cell>
        <Link href="/reflexiones">Reflexiones</Link>
      </Cell>
      <Cell>
        <Link href="/espacio-infantil">Espacio Infantil</Link>
      </Cell>
    </Container>
  );
}
