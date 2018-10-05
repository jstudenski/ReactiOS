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
    this.filterList = this.filterList.bind(this);
  }

  filterList(event) {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }

  componentWillMount (){
    this.setState({items: this.state.initialItems})
  }

  render() {
    return (
      <div>
        <Header
          title="Calendar"
          secondary
          search
        />
        <input type="text" placeholder="Search" onChange={this.filterList} />
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
