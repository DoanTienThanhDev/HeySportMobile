/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import Home from './src/screens/Chat';

 Navigation.registerComponent('Home', () => Home);
 Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
     root: {
        stack: {
        children: [
            {
             component: {
                  name: 'Home',
                  options: {
                   topBar:{visible:false}
                }
               }
          }
          ]
       }
      }
   });
 });