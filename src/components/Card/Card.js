import React from 'react';
// import PropTypes from 'prop-types';
// import theme from '../../theme';

// const { color } = theme;

const STYLE = {
  backgroundColor: 'salmon',
  minHeight: 100,
  borderRadius: 12,
  overflow: 'hidden',
};

const Card = () => (<div style={STYLE}>H world</div>);

Card.propTypes = {
  // activeColor: PropTypes.string,
};

Card.defaultProps = {
  // activeColor: color.blue,
};

export default Card;
