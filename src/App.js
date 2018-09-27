import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomeIcon from './components/icons/Home';
import EllipsisIcon from './components/icons/Ellipsis';
import CalendarIcon from './components/icons/Calendar';
import CommentIcon from './components/icons/Comment';
import EnvelopeIcon from './components/icons/Envelope';

import Home from './pages/Home/Home';
import Ellipsis from './pages/Ellipsis/Ellipsis';
import CommentPage from './pages/Comment/Comment';
import Envelope from './pages/Envelope/Envelope';
import Calendar from './pages/Calendar/Calendar';

const pages = [
  {
    route: '/', description: 'Home', component: Home, icon: <HomeIcon />
  },
  {
    route: '/Ellipsis', description: 'Ellipsis', component: Ellipsis, icon: <EllipsisIcon />
  },
  {
    route: '/Calendar', description: 'Calendar', component: Calendar, icon: <CalendarIcon />
  },
  {
    route: '/Comment', description: 'Comment', component: CommentPage, icon: <CommentIcon />
  },
  {
    route: '/Envelope', description: 'Envelope', component: Envelope, icon: <EnvelopeIcon />
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
          <div className="container">
            {pages.map(page => (
              <Route exact path={page.route} component={page.component} />
            ))}
          </div>
          <div className="footer">
            <div className="footer-icons">
              {pages.map((page, index) => (
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'rgb(49,123,246)',
                  }}
                  style={{ color: 'rgb(160, 161, 162)' }}
                  exact={index === 0}
                  to={page.route}
                >
                  <div>
                    {page.icon}
                    <p>{page.description}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
