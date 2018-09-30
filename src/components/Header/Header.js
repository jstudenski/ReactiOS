import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 'auto',
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      height: 56,
      transform: 'translate(0, -50px)',
    });
  }

  onBlur() {
    this.setState({
      height: 'auto',
      transform: 'translate(0, 0)',
    });
  }

  render() {
    // const { transform, transition } = this.state;
    const style = {
      paddingTop: 20,
      paddingBottom: 10,
      paddingLeft: this.props.secondary ? 20 : 0,
      paddingRight: this.props.secondary ? 20 : 0,
      marginLeft:  this.props.secondary ? 0 : 20,
      marginRight:  this.props.secondary ? 0 : 20,
      marginBottom: 10,
      color: this.props.color,
      borderBottom: this.props.hr ? '1px solid rgba(171, 172, 173, 0.5)':null,
      backgroundColor:  this.props.secondary ? 'rgb(239, 240, 241)' : null,
      transition: '.25s',
      transform: this.state.transform,
    }

    return (
      <div style={ style } >
        <h2>{this.props.title}</h2>
        {this.props.search ? <Search onFocus={this.onFocus} onBlur={this.onBlur}/> : null }
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  hr: PropTypes.bool,
  secondary: PropTypes.bool,
  search: PropTypes.bool,
};

Header.defaultProps = {
  title: 'Title',
  color: '#111111',
  hr: true,
  secondary: false,
  search: false,
};

export default Header
