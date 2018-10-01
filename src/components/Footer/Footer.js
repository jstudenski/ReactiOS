import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        footer component
      </footer>
    );
  }
}

Footer.propTypes = {
  // title: PropTypes.string,
};

Footer.defaultProps = {
  // title: 'Title',
};

export default Footer;
