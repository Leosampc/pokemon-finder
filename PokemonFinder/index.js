import {AppRegistry} from 'react-native';
import App from './app/App'; //Importa o App.js, estrutura inicial do aplicativo
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
