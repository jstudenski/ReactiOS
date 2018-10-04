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
          <div style={{
            backgroundColor: theme.color[page],
            margin: '1.6%',
            width: '30%',
            float: 'left',
            height: 75,
            borderRadius: 10,
            padding: '0.8em',
            boxSizing: 'border-box',
            textAlign: 'center',
            color: '#fff',
            flex: 1,
          }}>
            {page}
          </div>
        ))}
      </div>
    </Context.Provider>
  </div>
);

export default Home;
