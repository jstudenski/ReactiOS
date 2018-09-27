import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import SearchIcon from '../../components/icons/Search.js';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      height: 'auto',
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus(event){
    this.setState({
      focused: true,
      height: 56,
    });
    console.log(event);
  }

  onBlur(event){
    this.setState({
      focused: false,
      height: 'auto',
    });
    console.log(event);
  }

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };


  render() {
    const { height } = this.state;

    return (
      <div>
        <AnimateHeight
          className='two'
          height={ height }
        >
          {/* <li>
            <form class="g-forms-input">
              <input type="text" class="g-forms-input-search-bar" placeholder="Search SKU..." />
              <i class="g-forms-input-search-bar-icon fa fa-fw fa-search" />
            </form>
          </li> */}

          <h2 className='page-heading'>Calendar</h2>

          <form class="g-forms-input">
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
        </AnimateHeight>
      </div>
    );
  }
}
export default Calendar;
