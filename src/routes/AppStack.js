import React, {useContext} from 'react';
import {Button, Icon} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {ThemeContext} from 'styled-components';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: ({theme}) => theme.primaryColor,
            borderBottomWidth: 0.5,
          },
          headerTintColor: 'grey',
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Notes',

            headerRight: () => (
              <Button
                transparent
                onPress={() => navigation.push('SettingsScreen')}>
                <Icon name="cog" />
              </Button>
            ),
          })}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{title: 'Settings'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
