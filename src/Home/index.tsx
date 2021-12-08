import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNView from '../components/cores/RNView';

import RNHeaderPage from '../components/cores/RNHeaderPage';
import RNButton from '../components/cores/RNButton';
import RNInput from '../components/cores/RNInput';
interface HomeProps {
  componentId: string;
}
const Home = ({ componentId }: HomeProps) => {
  return (
    <RNView isLoading={false}>
      <RNHeaderPage title="Notification" iconRight="trash" />
      <RNView fill pHoz={16}>
        <RNButton title={'Login'} onPress={() => {}} />
        <RNInput error="sadsda" label="Full Name" onChangeText={() => {}} />
        <RNInput isSecurity label="Email" onChangeText={() => {}} />
      </RNView>
    </RNView>
  );
};

export default Home;
