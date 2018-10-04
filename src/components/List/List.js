import React from 'react';
// import PropTypes from 'prop-types';
import theme from '../../theme';

const List = props => (
  <div className="container">
    <ul
      className="test-list"
      style={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      }}
    >
      {props.items.map(group => (
        <div>
          <div
            style={{
              width: '100%',
              height: 30,
              backgroundColor: theme.color.lightGrey,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h6>{group.title}</h6>
          </div>
          {group.items.map(item => (
            <li>{item}</li>
          ))}
        </div>
      ))}
    </ul>
    <div
      style={{
        width: '100%',
        height: 20,
        backgroundColor: theme.color.lightGrey,
      }}
    />
  </div>
);

List.propTypes = {
  // title: PropTypes.string,
};

List.defaultProps = {
  // title: 'Title',
};

export default List;
