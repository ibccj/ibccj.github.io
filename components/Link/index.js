import styled from 'styled-components';

const Link = styled.a`
  color: black;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  text-align: center;
  width: 100%;

  &:hover {
    color: #6c6c6c;
  }
`;

export default Link;
