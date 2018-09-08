import React from 'react';
import PropTypes from 'prop-types';
import './segmentcontrol.css'

class Segmentcontrol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
    this.setGender = this.setGender.bind(this);
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
  setGender(event) {
     console.log(event.target);
     event.target.className = "checked";
    //  className="checked"
  }

  render() {

    let customStyle = {
      color: this.props.color,
      wigth: 100,
      height: 100,
      display: 'inline-block',
    }
    return (
    <div style={customStyle} onChange={this.setGender}>
      <div className="container">
        <div className="segmented">
          <label><input type="radio" name="segmented" value="option 1"/> Option 1</label>
          <label><input type="radio" name="segmented" value="option 2"/> Option 2</label>
          <label><input type="radio" name="segmented" value="option 3"/> Option 3</label>
          <label><input type="radio" name="segmented" value="option 4"/> Option 4</label>
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
};

export default Segmentcontrol
