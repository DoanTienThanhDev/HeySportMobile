import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNView from '../components/cores/RNView';

import RNHeaderPage from '../components/cores/RNHeaderPage';

interface HomeProps {
  componentId: string;
}
const Home = ({ componentId }: HomeProps) => {
  return (
    <RNView isLoading={false}>
      <RNHeaderPage title="Notification" iconRight="trash" />
      <Text>Home</Text>
      <Icon name="user" size={20} />
    </RNView>
  );
};

export default Home;
