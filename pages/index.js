import React from 'react';
import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import { Cell, Container } from '../components/Grid';
import Carousel from '../components/Carousel';
import Icon from '../components/Icon';
import Paragraph from '../components/Paragraph';
import Footer from '../components/Footer';

const FooterCell = styled(Cell)`
  margin-top: auto;
`;

export default function Home() {
  return (
    <Container flexDirection="column" height="100vh">
      <Cell>
        <Wrapper>
          <Header />
        </Wrapper>
      </Cell>
      <Cell>
        <Carousel />
      </Cell>
      <Cell textAlign="center" padding="10px">
        <Wrapper>
          <Icon size={70}>format_quote</Icon>
          <Paragraph fontSize={18} fontWeight="300" margin="10px 0">
            Te invitamos a ser parte de nuestra comunidad Cristiana.
          </Paragraph>
          <Paragraph fontSize={18} fontWeight="300" margin="10px 0">
            Nos reunimos cada Jueves en nuestro estudio bíblico a las 19:30 hrs y cada Domingo en
            nuestro culto de adoración a las 19:00 hrs.
          </Paragraph>
          <Paragraph fontSize={18} fontWeight="300" margin="10px 0">
            Dada la situación sanitaria nos encontramos en nuestro{' '}
            <a href="https://www.facebook.com/ibccj/">fans page</a> vía streaming.
          </Paragraph>
          <Paragraph fontSize={18} fontWeight="300" margin="10px 0">
            Ven a recibir junto a nosotros la bendición que Dios tiene preparada para ti.
          </Paragraph>
        </Wrapper>
      </Cell>

      <FooterCell>
        <Wrapper>
          <Footer />
        </Wrapper>
      </FooterCell>
    </Container>
  );
}
