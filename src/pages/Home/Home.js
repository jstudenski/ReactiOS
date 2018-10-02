import React from 'react';
import Header from '../../components/Header';
import Context from '../../context';
import theme from '../../theme';

const Home = () => (
  <div>
    <Header title="Home" secondary={false} />

    <Context.Provider>
      <div className="container">
        <div className="swatch" style={{ backgroundColor: theme.color.red }}>Red</div>
        <div className="swatch" style={{ backgroundColor: theme.color.orange }}>Orange</div>
        <div className="swatch" style={{ backgroundColor: theme.color.yellow }}>Yellow</div>
        <div className="swatch" style={{ backgroundColor: theme.color.green }}>Green</div>
        <div className="swatch" style={{ backgroundColor: theme.color.tealBlue }}>Teal Blue</div>
        <div className="swatch" style={{ backgroundColor: theme.color.blue }}>Blue</div>
        <div className="swatch" style={{ backgroundColor: theme.color.purple }}>Purple</div>
        <div className="swatch" style={{ backgroundColor: theme.color.pink }}>Pink</div>
      </div>
    </Context.Provider>

  </div>
);

export default Home;
