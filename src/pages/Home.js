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
          padding: `0 ${style.padding}`,
          justifyContent: 'space-between',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {Object.keys(color).map(value => (
          <div
            key={value}
            style={{
              backgroundColor: color[value],
              // margin: '1.6%',
              width: '30%',
              float: 'left',
              height: 75,
              borderRadius: 10,
              padding: '0.8em',
              textAlign: 'center',
              color: '#fff',
              flex: 1,
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </Context.Provider>
  </div>
);

export default Home;
