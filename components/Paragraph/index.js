import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-family: 'Ubuntu', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  line-height: ${({ fontSize }) => `${fontSize + fontSize * 0.2}px`};
`;

Paragraph.propTypes = {
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  lineHeight: PropTypes.number
};

Paragraph.defaultProps = {
  fontSize: 16,
  fontWeight: 'normal',
  margin: 'inherit',
  padding: 'inherit',
  color: 'inherit'
};

export default Paragraph;
