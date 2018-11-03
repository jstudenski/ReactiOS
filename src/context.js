import React from 'react';
import theme from './theme';

const ThemeContext = React.createContext({
  theme,
  // toggleLanguage: () => { },
});


export default ThemeContext;
