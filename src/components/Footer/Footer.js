import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from '../../theme';

const Footer = props => (
  <footer>
    <div className="footer-icons">
      {props.pages.map((page, index) => (
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: props.activeColor,
          }}
          style={{ color: props.color }}
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
  activeColor: PropTypes.string,
  color: PropTypes.string,
  labels: PropTypes.bool,
};

Footer.defaultProps = {
  activeColor: theme.color.blue,
  color: theme.color.darkGrey,
  labels: true,
};

export default Footer;
