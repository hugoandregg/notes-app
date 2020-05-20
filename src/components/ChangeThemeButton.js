import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {ThemeProviderContext} from '../ThemeProviders';
import {Button} from 'react-native';

export default () => {
  const {setActiveTheme, activeTheme} = useContext(ThemeProviderContext);
  const theme = useContext(ThemeContext);

  const changeTheme = () => {
    setActiveTheme(activeTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      color={theme.button.background}
      title={'Trocar Tema'}
      onPress={changeTheme}
    />
  );
};
