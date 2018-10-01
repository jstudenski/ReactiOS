import React from 'react';
import Header from '../../components/Header';

const Home = () => (
  <div>
    <Header title="Home" secondary={false} />
    <div className="container">
      <div className="swatch red">Red</div>
      <div className="swatch orange">Orange</div>
      <div className="swatch yellow">Yellow</div>
      <div className="swatch green">Green</div>
      <div className="swatch teal-blue">Teal Blue</div>
      <div className="swatch blue">Blue</div>
      <div className="swatch purple">Purple</div>
      <div className="swatch pink">Pink</div>
    </div>
  </div>
);

export default Home;
