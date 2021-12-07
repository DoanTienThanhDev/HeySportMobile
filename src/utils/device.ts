import DeviceInfo from "react-native-device-info"
import { Platform } from 'react-native';
import {Dimensions} from 'react-native';

export const hasNotch = DeviceInfo?.hasNotch();
export const isIOS = Platform.OS === 'ios';
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;


