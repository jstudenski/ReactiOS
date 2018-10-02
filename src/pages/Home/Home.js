import React from 'react';
import Header from '../../components/Header';
import Context from '../../context';
import theme from '../../theme';

const Home = () => (
  <div>
    <Header title="Home" secondary={false} />
    <Context.Provider>
      <div className="container">
        {Object.keys(theme.color).map(page => (
          <div className="swatch" style={{ backgroundColor: theme.color[page] }}>{page}</div>
        ))}
      </div>
    </Context.Provider>
  </div>
);

export default Home;
