import React from 'react';
import Header from '../../components/Header';
import List from '../../components/List';

const list = [
  { title: "Fruit", items: ["A", "B", "C", "D", "E"]},
  { title: "Vegtables", items: ["A1", "B2", "C3", "D4", "E5"]},
];

const Comment = () => (
  <div>
    <Header title="Comment" secondary search />
    <List items={list} />
  </div>
);

export default Comment;
