import React from 'react';
// import PropTypes from 'prop-types';
import theme from '../../theme';

const { style, color } = theme;

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
              backgroundColor: color.lightGrey,
              display: 'flex',
              alignItems: 'center',
              padding: `0 ${style.padding}`,
            }}
          >
            <h6>{group.title}</h6>
          </div>
          {group.items.map((item, index)=> (
            <li
              style={{
                padding: '10px 0',
                margin: `0 ${style.padding}`,
                borderBottom: (index + 1 === group.items.length) ? 'none' : '1px solid rgba(171, 172, 173, 0.5)',
              }}
            >
              {item}
            </li>
          ))}
        </div>
      ))}
    </ul>
    <div
      style={{
        width: '100%',
        height: 30,
        backgroundColor: color.lightGrey,
      }}
    />
    <div
      style={{
        width: '100%',
        height: 200,
        backgroundColor: '#f9f9f9',
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
