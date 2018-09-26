import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

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
          <h2 className='page-heading'>Calendar</h2>
          <input
            className="search-bar"
            type="text"
            name="searchbar"
            placeholder="App Store"
            onFocus={ this.onFocus }
            onBlur={ this.onBlur }
          />
        </AnimateHeight>
      </div>
    );
  }
}
export default Calendar;
