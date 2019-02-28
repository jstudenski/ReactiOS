import React from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { color } = theme;

const Footer = ({
  activeColor,
  backgroundColor,
  borderColor,
  labels,
  linkColor,
  pages,
}) => (
  <footer style={{
    backgroundColor,
    borderTop: `1px solid ${borderColor}`,
    bottom: 0,
    fontSize: 30,
    paddingBottom: 10,
    position: 'fixed',
    width: '100%',
  }}
  >
    <div className="footer-icons">
      {pages.map((page, index) => (
        <NavLink
          activeStyle={{
            color: activeColor,
            fontWeight: 'bold',
          }}
          style={{
            color: linkColor,
            margin: '0px 10px',
          }}
          exact={index === 0}
          key={page.description}
          to={page.route}
        >
          <div>
            {page.icon}
            { labels
              && (
              <p style={{ fontSize: 10, textAlign: 'center' }}>
                {page.description}
              </p>
              )
            }
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
