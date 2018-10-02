import React from 'react';
import theme from './theme';

const ThemeContext = React.createContext({
  lang: theme,
//  toggleLanguage: () => { },
});

export default ThemeContext;
