import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Xicon from './Xicon';
import theme from '../../theme';

const { color } = theme;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onChange('');
  }

  render() {
    const {
      cursorColor,
      icon,
      iconColor,
      onBlur,
      onChange,
      onFocus,
    } = this.props;

    const searchBar = {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
    };

    const searchInput = {
      border: 'none',
      borderRadius: 10,
      caretColor: cursorColor,
      fontSize: 18,
      height: 36,
      marginTop: 5,
      paddingLeft: icon ? 32 : 12,
      width: '100%',
    };

    const ICON = {
      color: iconColor,
      display: icon ? 'inline' : 'none',
      height: 16,
      left: 9,
      paddingTop: 5,
      position: 'absolute',
      width: 16,
    };

    const xicon = {
      color: iconColor,
      height: 20,
      paddingTop: 5,
      position: 'absolute',
      right: 9,
      width: 20,
    };

    return (
      <form style={searchBar}>
        <input
          name="searchbar"
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder="Search"
          style={searchInput}
          type="text" />
        <div style={ICON}>
          <Icon />
        </div>
        <div
          role="button"
          style={xicon}
          onClick={this.onClick}>
          <Xicon />
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  icon: PropTypes.bool,
  iconColor: PropTypes.string,
  cursorColor: PropTypes.string,
};

Search.defaultProps = {
  icon: true,
  iconColor: color.darkGrey,
  cursorColor: color.blue,
};

export default Search;
