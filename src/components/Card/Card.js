import React from 'react';
// import PropTypes from 'prop-types';
// import theme from '../../theme';

// const { color } = theme;

const STYLE = {
  backgroundColor: 'salmon',
  borderRadius: 12,
  minHeight: 100,
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
