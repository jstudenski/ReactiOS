import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from '../../theme';

const { color } = theme;

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { backgroundColor, borderColor, pages, activeColor, color, labels } = this.props;
    const footerStyle = {
      borderTop: `1px solid ${borderColor}`,
      backgroundColor: backgroundColor,
      width: '100%',
      fontSize: 30,
      position: 'fixed',
      bottom: 0,
      paddingBottom: 10,
    };

    return (
      <footer style={footerStyle}>
        <div className="footer-icons">
          {pages.map((page, index) => (
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: activeColor,
              }}
              style={{
                color: color,
                margin: '0px 10px',
              }}
              exact={index === 0}
              to={page.route}
            >
              <div>
                {page.icon}
                {labels && <p style={{ fontSize: 10, textAlign: 'center', }}>{page.description}</p>}
              </div>
            </NavLink>
          ))}
        </div>
      </footer>
    );
  }
};

Footer.propTypes = {
  activeColor: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  labels: PropTypes.bool,
};

Footer.defaultProps = {
  activeColor: color.blue,
  borderColor: color.grey,
  backgroundColor: color.lightGrey,
  color: color.darkGrey,
  labels: true,
};

export default Footer;
