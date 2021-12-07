import { Navigation } from 'react-native-navigation';

 const pop = ({ componentId }: any) => {
    Navigation.pop(componentId);
 };

export default {
     pop
 }