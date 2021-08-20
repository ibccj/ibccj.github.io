import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: ${({ wide = false }) => (wide ? '100%' : 'auto')};
  font-family: 'Montserrat', serif;
  padding: 7px 10px;
  border-radius: 3px;
  border: 1px solid #b7b2b3;
  transition: all ease-in-out 0.17s;
  text-align: ${(props) => props.align || 'inherit'};
  appearance: none;
  height: 38px;
  opacity: 1 !important;

  &:focus {
    border-color: black;
  }

  &:disabled {
    border-color: hsl(0, 0%, 90%);
    background-color: hsl(0, 0%, 95%);
    color: hsl(0, 0%, 50%);
  }

  &:read-only {
    background-color: hsl(0, 0%, 95%);
    border-color: hsl(0, 0%, 90%);
  }

  &[type='password'] {
    letter-spacing: 2px;
  }
`;

Input.propTypes = {
  wide: PropTypes.bool,
  align: PropTypes.string
};

export default Input;
