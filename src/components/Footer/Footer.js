import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Footer = props => (
  <footer>
    <div className="footer-icons">
      {props.pages.map((page, index) => (
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'rgb(49,123,246)',
          }}
          style={{
            color: 'rgb(160, 161, 162)',
          }}
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
  </footer>
);

export default Footer;
