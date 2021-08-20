import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SpinnerIcon from '../../svg/spinner.svg';

const Span = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const Spinner = ({ size = 30, className = '' }) => {
  return (
    <Span className={className}>
      <SpinnerIcon width={size} height={size} />
    </Span>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
};

export default Spinner;
