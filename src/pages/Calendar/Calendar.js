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
      transform: 'translate(0, -50px)',
    });
    console.log(event);
  }

  onBlur(event){
    this.setState({
      focused: false,
      height: 'auto',
      transform: 'translate(0, 0)',
      transition: '.25s'
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
        <div
          className='two'
          style={{transform: this.state.transform, transition: this.state.transition}}
        >
          <h2 className='page-heading'>Calendar</h2>
          test cursor transition 
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
        </div>
      </div>
    );
  }
}
export default Calendar;
