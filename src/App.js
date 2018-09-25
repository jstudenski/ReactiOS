import React, { Component } from 'react';
import './App.css';
import SegmentControl from './components/SegmentControl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iOS IU Kit</h1>
        </header>
        <SegmentControl
          color='rebeccapurple'
          values={['One', 'Two']}
          selectedIndex={1}
        />
        <div className="footer">test</div>
      </div>
    );
  }
}

export default App;
