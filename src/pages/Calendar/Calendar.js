import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

class Calendar extends React.Component {
  static contextTypes = {
    locale: PropTypes.object,
  }

  render() {
    return (
      <div>
        <Header
          title="Calendar"
          secondary
          search
        />
        <p>{this.context.locale}</p>
      </div>
    )

  }

};

export default Calendar;
