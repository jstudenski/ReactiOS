import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import List from '../../components/List';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
        { title: 'Animals', items: ['wombat', 'octopus', 'puma', 'salamander', 'otter', 'crow', 'cougar', 'baboon', 'ocelot', 'elk', 'jackal', 'woodchuck']},
        { title: 'Movies', items: ['Mission: Impossible - Fallout', 'Wonder Woman', 'Edge of Tomorrow', 'Pulp Fiction', 'Shrek', 'Iron Man', 'Solo: A Star Wars Story', 'The Matrix']},
        { items: ['Boise', 'Denver', 'Minneapolis', 'Anchorage', 'New Orleans', 'Chandler', 'Hialeah', 'Madison', 'Tulsa', 'Lubbock']},
      ],
      items: [],
    };
    this.onChange = this.onChange.bind(this);
  }


  componentWillMount() {
    this.setState({items: this.state.initialItems})
  }

  onChange(event) {
    let userInput;
    if (typeof(event) === 'object') {
      userInput = event.target.value;
    } else {
      userInput = event;
    };

    if (userInput == '') {
      this.setState({items: this.state.initialItems})
    } else {
      let list = this.state.initialItems;
      let tempArr = [];
      Object.keys(list).forEach(function(key){
        list[key].items.forEach(function(item){
          tempArr.push(item);
        });
      })
      let updatedList = tempArr;

      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
        userInput.toLowerCase()) !== -1;
      });

      // TODO: if list is zero, display "no results screen"
      console.log(updatedList.length);

      this.setState({
        items: [{ title: 'Results:', items: updatedList}]
      });
    }
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
        <List items={this.state.items} />
      </div>
    );
  }
}

export default Calendar;
