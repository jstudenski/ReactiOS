import React from 'react';
import Header from '../../components/Header';
import theme from '../../theme';

const Comment = () => (
  <div>
    <Header title="Comment" secondary search />
    <div className="container">
      <ul className="test-list">
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>one</li>
      </ul>


    </div>
      <div 
        style={{
          width: '100%',
          height: 30,
          backgroundColor: theme.color.lightGrey,
          borderWidth: 1,
          borderColor: '#cdcecf',
          borderStyle: 'solid',
        }}
      />




  </div>
);

export default Comment;
