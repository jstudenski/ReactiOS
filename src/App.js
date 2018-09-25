import React, { Component } from 'react';
import './App.css';
import SegmentControl from './components/SegmentControl';
import { BrowserRouter as Router, Route, NavLink, IndexLink } from "react-router-dom";
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
      iconColor: 'rgb(199, 200, 201)',
      footerBackground: 'rgb(239, 240, 241)',
    };
  }


  render() {

    return (
      <Router>
      <div className="App">


        <div className="container">
          <header className="App-header">
            <h1 className="App-title">iOS IU Kit</h1>
          </header>
          <SegmentControl
            color='rebeccapurple'
            values={['One', 'Two']}
            selectedIndex={1}
          />
          {pages.map(page => (
            <Route exact path={page.route} component={page.component} ></Route>
          ))}

        <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />

          <div className="footer" style={{backgroundColor: this.state.footerBackground}}>
            <div className="footer-icons" style={{color: this.state.iconColor}}>

        {pages.map((page, index) => (
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'rgb(49,123,246)'
            }}
            style={{color: 'rgb(199, 200, 201)'}}
            exact={index === 0 ? true : false}
            to={page.route}><div>{page.icon}</div>
          </NavLink>
        ))
        }



            </div>
          </div>
        </div>

      </div>
      </Router>
    );
  }
}

export default App;
