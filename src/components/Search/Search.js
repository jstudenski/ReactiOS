import React from 'react';
import Icon from './Icon';

class Search extends React.Component {

  render() {
    return (
      <form className="g-forms-input">
        <input
          className="search-bar"
          type="text"
          name="searchbar"
          placeholder="Search"
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
        <div className="search-bar-icon">
          <Icon />
        </div>
      </form>
    )
  }
}

export default Search
