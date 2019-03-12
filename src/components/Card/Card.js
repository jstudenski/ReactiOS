import React from 'react';


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
