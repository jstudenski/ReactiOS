import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Context from '../../context';
import theme from '../../theme';

const Footer = props => (
  <footer>
    <div className="footer-icons">
      {props.pages.map((page, index) => (
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: props.activeStyle,
          }}
          style={{
            color: 'rgb(160, 161, 162)',
          }}
          exact={index === 0}
          to={page.route}
        >
          <div>
            {page.icon}
            {props.labels ? <p>{page.description}</p> : null}
          </div>
        </NavLink>
      ))}
    </div>
  </footer>
);


Footer.propTypes = {
  activeStyle: PropTypes.string,
  labels: PropTypes.bool,
};

Footer.defaultProps = {
  activeStyle: theme.color.blue,
  labels: true,
};

export default Footer;
