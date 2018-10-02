import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import theme from '../../theme';



class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { backgroundColor, borderColor, pages, activeColor, color, icon, labels, description } = this.props;
    const footerStyle = {
      borderTop: `1px solid ${borderColor}`,
      backgroundColor: backgroundColor,
      width: '100%',
      fontSize: 30,
      position: 'fixed',
      bottom: 0,
      boxSizing: 'border-box',
      paddingBottom: 10,
    }

    return (
      <footer style={footerStyle}>
        <div className="footer-icons">
          {pages.map((page, index) => (
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: activeColor,
              }}
              style={{ color: color }}
              exact={index === 0}
              to={page.route}
            >
              <div>
                {page.icon}
                {labels ? <p>{page.description}</p> : null}
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
  activeColor: theme.color.blue,
  borderColor: theme.color.grey,
  backgroundColor: theme.color.lightGrey,
  color: theme.color.darkGrey,
  labels: true,
};

export default Footer;
