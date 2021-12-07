/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import Home from './src/Home';

 Navigation.registerComponent('Home', () => Home);
 Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
     root: {
        stack: {
        children: [
            {
             component: {
                name: 'Home'
            }
          }
          ]
       }
      }
   });
 });