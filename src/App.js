import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeIcon from './components/icons/Home';
import EllipsisIcon from './components/icons/Ellipsis';
import CalendarIcon from './components/icons/Calendar';

import CommentIcon from './components/icons/Comment';
import EnvelopeIcon from './components/icons/Envelope';
// Pages
import Calendar from './pages/Calendar';
import CommentPage from './pages/Comment';
import Ellipsis from './pages/Ellipsis';
import Envelope from './pages/Envelope';
import Home from './pages/Home';
// Compenents
import Footer from './components/Footer';

const PAGES = [
  {
    route: '/', description: 'Home', component: Home, icon: <HomeIcon />,
  },
  {
    route: '/Ellipsis', description: 'Ellipsis', component: Ellipsis, icon: <EllipsisIcon />,
  },
  {
    route: '/Calendar', description: 'Calendar', component: Calendar, icon: <CalendarIcon />,
  },
  {
    route: '/Comment', description: 'Comment', component: CommentPage, icon: <CommentIcon />,
  },
  {
    route: '/Envelope', description: 'Envelope', component: Envelope, icon: <EnvelopeIcon />,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div style={{ maxWidth: 375, margin: '0 auto' }}>
            {PAGES.map(page => (
              <Route
                exact
                key={page.route}
                path={page.route}
                component={page.component}
              />
            ))}
          </div>
          <Footer pages={PAGES} />
        </div>
      </Router>
    );
  }
}

export default App;
