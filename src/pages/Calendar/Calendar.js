import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
        'Apples',
        'Broccoli',
        'Chicken',
        'Bacon',
        'Eggs',
        'Salmon',
        'Granola',
        'Bananas',
        'Beer',
        'Wine',
        'Yogurt',
      ],
      items: [],
    };
    this.onChange = this.onChange.bind(this);
  }


  componentWillMount () {
    this.setState({items: this.state.initialItems})
  }

  onChange(event) {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }

  render() {
    return (
      <div>
        <Header
          title="Calendar"
          secondary
          search
          onChange={this.onChange}
        />
        <ul>
          {
          this.state.items.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default Calendar;
