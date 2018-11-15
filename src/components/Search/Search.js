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

    const { cursorColor, icon, iconColor } = this.props;

    const searchBar = {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    }

    const searchInput = {
      caretColor: cursorColor,
      width: '100%',
      borderRadius: 10,
      border: 'none',
      fontSize: 18,
      paddingLeft: icon ? 32 : 12,
      height: 36,
      marginTop: 5,
    }

    const ICON = {
      width: 16,
      height: 16,
      paddingTop: 5,
      position: 'absolute',
      left: 9,
      color: iconColor,
      display: icon ? 'inline' : 'none',
    }

    const xicon = {
      width: 20,
      height: 20,
      paddingTop: 5,
      position: 'absolute',
      right: 9,
      color: iconColor,
    }

    return (
      <form style={ searchBar }>
        <input
          style={ searchInput }
          type="text"
          name="searchbar"
          placeholder="Search"
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}
        />
        <div style={ ICON }>
          <Icon />
        </div>
        <div style={ xicon } onClick={this.onClick}>
          <Xicon />
        </div>
      </form>
    )
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

export default Search
