import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomeIcon from './components/icons/Home.js';
import EllipsisIcon from './components/icons/Ellipsis.js';
import CalendarIcon from './components/icons/Calendar.js';
import CommentIcon from './components/icons/Comment.js';
import EnvelopeIcon from './components/icons/Envelope.js';

import Home from './pages/Home/Home';
import Ellipsis from './pages/Ellipsis/Ellipsis';
import Calendar from './pages/Calendar/Calendar';
import CommentPage from './pages/Comment/Comment';
import Envelope from './pages/Envelope/Envelope';


const pages = [
  {route: '/', description:'Home', component:Home, icon:<HomeIcon />},
  {route: '/Ellipsis', description:'Ellipsis', component:Ellipsis, icon:<EllipsisIcon />},
  {route: '/Calendar', description:'Calendar', component:Calendar, icon:<CalendarIcon />},
  {route: '/Comment', description:'Comment', component:CommentPage, icon:<CommentIcon />},
  {route: '/Envelope', description:'Envelope', component:Envelope, icon:<EnvelopeIcon />},
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // iconColor: 'rgb(199, 200, 201)',
      // iconColor: 'rgb(160, 161, 162)',
      // footerBackground: 'rgb(239, 240, 241)',
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            {pages.map(page => (
              <Route exact path={page.route} component={page.component} ></Route>
            ))}
          </div>
          <div className="footer" style={{backgroundColor: this.state.footerBackground}}>
            <div className="footer-icons" style={{color: this.state.iconColor}}>
              {pages.map((page, index) => (
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'rgb(49,123,246)'
                  }}
                  style={{color: 'rgb(160, 161, 162)'}}
                  exact={index === 0 ? true : false}
                  to={page.route}><div>{page.icon}<p>{page.description}</p></div>
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
