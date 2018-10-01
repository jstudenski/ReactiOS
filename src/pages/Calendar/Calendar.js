import React, { Component } from 'react';
import Header from '../../components/Header';

class Calendar extends Component {
  render() {
    return (
      <div>
        <Header
          title="Calendar"
          secondary
          search
        />
      </div>
    );
  }
}
export default Calendar;
