/**
 * @format
 */
import {AppRegistry,LogBox} from 'react-native';
import App from './src/router';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
