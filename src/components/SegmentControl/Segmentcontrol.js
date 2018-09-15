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
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    // this.setState(prevState => ({
    //   counter: prevState.counter + 1
    // }));
  }

  // $(document).ready(function(){
  //     $(".segmented label input[type=radio]").each(function(){
  //         $(this).on("change", function(){
  //             if($(this).is(":checked")){
  //                $(this).parent().siblings().each(function(){
  //                     $(this).removeClass("checked");
  //                 });
  //                 $(this).parent().addClass("checked");
  //             }
  //         });
  //     });
  // });

  handleChange(event){
    this.setState({
      selectedValue: event.target.value
    });
  }

  render() {

    let customStyle = {
      color: this.props.color,
      wigth: 100,
      height: 100,
      display: 'inline-block',
    }
    return (
     <div style={customStyle} >
      <div className="container">
        {/* <div className="segmented">
          {this.props.values.map((option) =>
            <label>
              <input
                className="hello"
                type="radio"
                name="segmented"
                value={option}
                onChange={this.handleChange}
              />
                {option}
              </label>
          )}
        </div> */}


      <div className="title">Radio Input Controls</div>
      <div className="segment_control_container">

        <input checked={this.state.selectedValue == "Option 1" ? "checked" : null } type="radio" id="option_1" name="option_control" value="Option 1"  onChange={this.handleChange}/>
        <label className="segment_control" htmlFor="option_1">Option 1</label>

        <input checked={this.state.selectedValue == "Option 2" ? "checked" : null } type="radio" id="option_2" name="option_control" value="Option 2"  onChange={this.handleChange} />
        <label className="segment_control" htmlFor="option_2">Option 2</label>

        <input checked={this.state.selectedValue == "Option 3" ? "checked" : null } type="radio" id="option_3" name="option_control" value="Option 3"  onChange={this.handleChange} />
        <label className="segment_control" htmlFor="option_3">Option 3</label>
      </div>
      </div>
    </div>
    )
  }
}

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
