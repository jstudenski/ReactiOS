import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="Calendar"
          secondary
          search
        />
      </div>
    )
  }
};

export default Calendar;
