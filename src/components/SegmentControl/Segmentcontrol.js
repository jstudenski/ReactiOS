import React from 'react';
import PropTypes from 'prop-types';
import './segmentcontrol.css'

class Segmentcontrol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      checkedIndex: 0,
      selectedValue: 'Option 2'
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      selectedValue: event.target.value
    });
    console.log(this.state);
  }

  render() {
    let customStyle = {
      color: this.props.color,
      wigth: 100,
      height: 100,
      display: 'inline-block',
    }
    return (
      <div style={customStyle}>
        <div className="container">

          <div className="segment_control_container" onChange={this.handleChange}>



<input type="radio" id="option_1" name="option_control" value="Option 1"/>
<label className="segment_control" htmlFor="option_1">Option 1</label>
<input type="radio" id="option_2" name="option_control" value="Option 2"/>
<label className="segment_control" htmlFor="option_2">Option 2</label>
<input type="radio" id="option_3" name="option_control" value="Option 3"/>
<label className="segment_control" htmlFor="option_3">Option 3</label>


          </div>
        </div>
      </div>
    )
  }
}

// {this.props.values.map(val =>
//   <input type="radio" id="option_1" name="option_control" value="Option 1" />,
//   <label className="segment_control" htmlFor="option_1">{val}</label>
// )}


//<h1 onClick={this.handleClick}>Hello Segmentcontrol: {this.state.counter}</h1>
Segmentcontrol.propTypes = {
  // title: PropTypes.string.isRequired,
};

Segmentcontrol.defaultProps = {
  color: 'salmon',
  values: ['Option One', 'Option Two', 'Option Three'],
  selectedIndex: 0,
};

export default Segmentcontrol
