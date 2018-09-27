import React, { Component } from 'react';
import SearchIcon from '../../components/icons/Search';

class Calendar extends Component {
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
      transition: '.25s',
    });
  }

  onBlur() {
    this.setState({
      height: 'auto',
      transform: 'translate(0, 0)',
      transition: '.25s',
    });
  }

  toggle() {
    const { height } = this.state;
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  }

  render() {
    const { transform, transition } = this.state;

    return (
      <div>
        <div
          className="two"
          style={{ transform, transition }}
        >
          <h2 className="page-heading">Calendar</h2>
          <form className="g-forms-input">
            <input
              className="search-bar"
              type="text"
              name="searchbar"
              placeholder="Search"
              onFocus={ this.onFocus }
              onBlur={ this.onBlur }
            />
            <div className="search-bar-icon">
              <SearchIcon />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Calendar;
