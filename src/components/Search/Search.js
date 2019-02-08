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
 cursorColor, icon, iconColor, onFocus, onBlur, onChange 
} = this.props;

    const searchBar = {
      display: 'flex',
      alignItems: 'center',
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
      width: 16,
      height: 16,
      paddingTop: 5,
      position: 'absolute',
      left: 9,
      color: iconColor,
      display: icon ? 'inline' : 'none',
    };

    const xicon = {
      width: 20,
      height: 20,
      paddingTop: 5,
      position: 'absolute',
      right: 9,
      color: iconColor,
    };

    return (
      <form style={searchBar}>
        <input
          style={searchInput}
          type="text"
          name="searchbar"
          placeholder="Search"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
        <div style={ICON}>
          <Icon />
        </div>
        <div style={xicon} onClick={this.onClick}>
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
