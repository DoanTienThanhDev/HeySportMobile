import React from 'react';
import { StyleSheet, Text, View, ViewProps, ActivityIndicator } from 'react-native';
import Utils from '../../utils';
import { Colors } from '../../themes';

interface RNViewProps extends ViewProps {
  children?: React.ReactNode;
  isLoading?: boolean;
}

const RNView = ({ children, isLoading }: RNViewProps) => {
  return (
    <View style={[styles.container, { backgroundColor: isLoading ? Colors.blackB30 : '#FFFFFF' }]}>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
      {children}
    </View>
  );
};

export default RNView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    width: Utils.isIOS ? 120 : 100,
    height: Utils.isIOS ? 120 : 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: Utils.SCREEN_HEIGHT / 2 - (Utils.isIOS ? 60 : 80),
    left: Utils.SCREEN_WIDTH / 2 - (Utils.isIOS ? 60 : 50),
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
});
