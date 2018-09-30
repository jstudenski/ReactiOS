import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

  render() {

    const style = {
      paddingTop: 20,
      paddingBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      color: this.props.color,
      borderBottom: this.props.hr ? '1px solid rgba(171, 172, 173, 0.5)':null,
    }

    return (
      <div style={style} >
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  hr: PropTypes.bool,
};

Header.defaultProps = {
  title: 'Title',
  color: '#111111',
  hr: true,
};

export default Header
