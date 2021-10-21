import React from 'react';
import Slider from 'react-slick';
import { Cell, Container as GridContainer } from '../Grid';

import styled from 'styled-components';

const Image = styled.div`
  background-image: url('${({ url }) => url}');
  background-size: cover;
  background-position: 50% center;
  background-repeat: no-repeat;
  height: 320px;
  max-width: 100%;
  width: 100%;
`;

const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const TextOverlay = styled(GridContainer)`
  position: absolute;
  padding: 20px;
  width: 100%;
  height: calc(100% - 3px);
  top: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 28px;
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
`;

const SubTitle = styled.h2`
  margin-top: 20px;
  font-size: 24px;
  font-family: 'Ubuntu', sans-serif;
`;

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 3000
  };

  return (
    <Container>
      <Slider {...settings}>
        <Image url="/images/carousel_image.jpeg" />
        <Image url="/images/carousel_image1.jpeg" />
      </Slider>

      <TextOverlay alignItems="center" justifyContent="center" flexDirection="column">
        <Cell>
          <Title>Iglesia Bautista Caminando con Jesús</Title>
          <SubTitle>Puesto los ojos en Jesús</SubTitle>
        </Cell>
      </TextOverlay>
    </Container>
  );
}
