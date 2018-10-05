import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: 'translate(0, 0)',
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      transform: 'translate(0, -50px)',
    });
  }

  onBlur() {
    this.setState({
      transform: 'translate(0, 0)',
    });
  }



  render() {
    const {
      title, search, secondary, color, hr,
    } = this.props;
    const { transform } = this.state;
    const style = {
      padding: secondary ? '20px 20px 10px 20px' : '20px 0 10px 0',
      margin: secondary ? '0 0 0 0' : '0 20px 0 20px',
      color,
      borderBottom: hr && '1px solid rgba(171, 172, 173, 0.5)',
      backgroundColor: secondary && 'rgb(239, 240, 241)',
      transition: '.25s',
      transform,
    };

    return (
      <header style={style}>
        <div style={{ maxWidth: 375, margin: '0 auto' }}>
          <h2>{title}</h2>
          { search && <Search onChange={this.props.onChange} onFocus={this.onFocus} onBlur={this.onBlur} /> }
        </div>
      </header>
    );
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

export default Header;
