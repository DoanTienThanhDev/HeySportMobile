import { Send } from 'react-native-gifted-chat';
import RNIcon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet } from 'react-native';

import { RNView } from '../../components/cores';
import { Colors } from '../../themes';

export const renderSend = (props: any) => {
  return (
    <Send {...props} containerStyle={{ justifyContent: 'center' }}>
      <RNIcon name="paper-plane" style={styles.sendIcon} />
    </Send>
  );
};

const styles = StyleSheet.create({
  sendIcon: {
    fontSize: 24,
    marginRight: 20,
    color: Colors.primary,
  },
});
