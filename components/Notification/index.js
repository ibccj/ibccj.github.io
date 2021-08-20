import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  info: {
    background: '#f6f6f6',
    border: '#f1f0f0'
  },
  success: {
    background: '#edfbf6',
    border: '#e3f3ed'
  },
  error: {
    background: '#fef4f6',
    border: '#eae1e3'
  },
  warning: {
    background: '#fff6ee',
    border: '#fbf1e8'
  }
};

const Notification = styled.div`
  text-align: left;
  padding: 12px 10px;
  background-color: ${({ type = 'info' }) => colors[type].background};
  border: 1px solid ${({ type }) => colors[type].border};
  color: #797979;
  font-size: 14px;
`;

Notification.defaultProps = {
  type: 'info'
};

Notification.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning'])
};

export default Notification;
