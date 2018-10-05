import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { color } = theme;

class Search extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const searchBar = {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    }

    const searchInput = {
      caretColor: this.props.cursorColor,
      width: '100%',
      borderRadius: 10,
      border: 'none',
      fontSize: 18,
      paddingLeft: this.props.icon ? 32 : 12,
      height: 36,
      marginTop: 5,
    }

    const icon = {
      width: 16,
      height: 16,
      paddingTop: 5,
      position: 'absolute',
      left: 9,
      color: this.props.iconColor,
      display: this.props.icon ? 'inline' : 'none',
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
        <div style={ icon }>
          <Icon />
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
