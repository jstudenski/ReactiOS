import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { style, color } = theme;

const List = ({ items }) => (
  <div className="container">
    <ul
      className="test-list"
      style={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      }}
    >
      {items.map((group, indexA) => (
        <div>
          <div
            key={indexA}
            style={{
              alignItems: 'center',
              backgroundColor: color.lightGrey,
              display: 'flex',
              height: 30,
              padding: `0 ${style.padding}`,
              width: '100%',
            }}
          >
            <h6>{group.title}</h6>
          </div>
          {group.items.map((item, indexB) => (
            <li
              style={{
                borderBottom: (indexB + 1 === group.items.length) ? 'none' : '1px solid rgba(171, 172, 173, 0.5)',
                margin: `0 ${style.padding}`,
                padding: '10px 0',
              }}
              key={item}
            >
              {item}
            </li>
          ))}
        </div>
      ))}
    </ul>
    <div style={{
      backgroundColor: color.lightGrey,
      height: 30,
      width: '100%',
    }} />
    <div style={{
      backgroundColor: '#f9f9f9',
      height: 200,
      width: '100%',
    }} />
  </div>
);

List.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default List;
