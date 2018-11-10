import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import List from '../components/List';


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

  UNSAFE_componentWillMount() {
    this.setState({items: this.state.initialItems})
  }

  onChange(event) {
    const userInput = (typeof (event) === 'object') ? event.target.value : event;
    const { initialItems } = this.state;

    if (userInput === '') {
      this.setState({ items: initialItems });
    } else {
      const list = initialItems;
      let updatedList = [];
      Object.keys(list).forEach((key) => {
        list[key].items.forEach((item) => {
          updatedList.push(item);
        });
      });

      updatedList = updatedList.filter((item) => {
        return item.toLowerCase().search(userInput.toLowerCase()) !== -1;
      });

      // TODO: if list is zero, display "no results screen"
      // console.log(updatedList.length);

      this.setState({
        items: [{ title: 'Results:', items: updatedList }],
      });
    }
  }

  render() {
    const { items } = this.state;
    return ([
      <Header
        title="Calendar"
        secondary
        search
        onChange={this.onChange}
      />,
      <List items={items} />
    ]);
  }
}

export default Calendar;
