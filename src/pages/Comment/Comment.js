import React from 'react';
import Header from '../../components/Header';

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
  </div>
);

export default Comment;
