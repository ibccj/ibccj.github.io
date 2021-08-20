import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div(
  ({
    height = 'auto',
    width = 'auto',
    maxWidth = 'inherit',
    overflow = 'inherit',
    margin = '0',
    padding = '0',
    flexDirection = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    flexWrap = 'nowrap'
  }) => ({
    display: 'flex',
    flex: 1,
    height,
    overflow,
    width,
    maxWidth,
    margin,
    padding,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems
  })
);

Container.propTypes = {
  height: PropTypes.string,
  overflow: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string
};

export const Cell = styled.div(
  ({
    height = 'auto',
    width = 'auto',
    maxWidth = 'inherit',
    minHeight = '0',
    margin = '0',
    padding = '0',
    flexGrow = 0,
    flexBasis = 'auto',
    alignSelf = 'auto',
    textAlign = 'inherit',
    flexShrink = 1
  }) => ({
    height,
    width,
    maxWidth,
    minHeight,
    margin,
    padding,
    flexGrow,
    alignSelf,
    flexBasis,
    textAlign,
    flexShrink
  })
);

Cell.propTypes = {
  height: PropTypes.string,
  minHeight: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  flexGrow: PropTypes.number,
  flexBasis: PropTypes.string,
  alignSelf: PropTypes.string,
  textAlign: PropTypes.string,
  flexShrink: PropTypes.number
};
