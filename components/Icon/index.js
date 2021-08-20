import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.i`
  vertical-align: middle;
  display: inline-block;
  font-size: ${({ size }) => `${size}px`};
`;

const Icon = ({ size = 16, children = null, className = '' }) => {
  return (
    <StyledIcon size={size} className={`${className} material-icons`}>
      {children}
    </StyledIcon>
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Icon;
