import React from 'react';
import Header from '../components/Header';
import Context from '../context';
import theme from '../theme';

const { style, color } = theme;

const Home = () => (
  <div>
    <Header title="Home" secondary={false} />
    <Context.Provider>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: `0 ${style.padding}`,
        }}>
        {Object.keys(color).map(value => (
          <div
            key={value}
            style={{
              backgroundColor: color[value],
              borderRadius: 10,
              color: '#fff',
              flex: 1,
              float: 'left',
              height: 75,
              padding: '0.8em',
              textAlign: 'center',
              width: '30%',
            }}>
            {value}
          </div>
        ))}
      </div>
    </Context.Provider>
  </div>
);

export default Home;
