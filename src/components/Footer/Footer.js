import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { color } = theme;

const Footer = ({
  backgroundColor,
  borderColor,
  pages,
  activeColor,
  linkColor,
  labels,
}) => (
  <footer style={{
    borderTop: `1px solid ${borderColor}`,
    backgroundColor,
    width: '100%',
    fontSize: 30,
    position: 'fixed',
    bottom: 0,
    paddingBottom: 10,
  }}
  >
    <div className="footer-icons">
      {pages.map((page, index) => (
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: activeColor,
          }}
          style={{
            color: linkColor,
            margin: '0px 10px',
          }}
          exact={index === 0}
          to={page.route}
          key={page.description}
        >
          <div>
            {page.icon}
            {labels && <p style={{ fontSize: 10, textAlign: 'center' }}>{page.description}</p>}
          </div>
        </NavLink>
      ))}
    </div>
  </footer>
);

Footer.propTypes = {
  activeColor: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  linkColor: PropTypes.string,
  labels: PropTypes.bool,
  pages: PropTypes.instanceOf(Array).isRequired,
};

Footer.defaultProps = {
  activeColor: color.blue,
  borderColor: color.grey,
  backgroundColor: color.lightGrey,
  linkColor: color.darkGrey,
  labels: true,
};

export default Footer;