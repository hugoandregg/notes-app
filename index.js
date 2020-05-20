/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Providers from './src/ThemeProviders';

AppRegistry.registerComponent(appName, () => Providers);
