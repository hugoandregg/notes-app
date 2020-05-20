import React, {useState, createContext} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './configs/themes';
import App from './App';

export const ThemeProviderContext = createContext();

const Providers = () => {
  const [activeTheme, setActiveTheme] = useState('light');

  return (
    <ThemeProviderContext.Provider value={{setActiveTheme, activeTheme}}>
      <ThemeProvider theme={theme[activeTheme]}>
        <App />
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default Providers;
