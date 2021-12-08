import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import RNTouchable from './RNTouchable';
import RNText from './RNText';

import { Colors } from '../../themes';

interface RNButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  isLoading?: boolean;
  colorLoading?: string;
  colorButton?: string;
  colorText?: string;
  disabled?: boolean;
}

const RNButton = ({
  title,
  onPress,
  style,
  isLoading,
  colorButton,
  colorLoading,
  colorText,
  disabled,
}: RNButtonProps) => {
  return (
    <RNTouchable
      onPress={onPress}
      style={[style, styles.container]}
      h={52}
      color={colorButton || Colors.primary}
      borderRadius={10}
      center
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size={'small'} color={colorLoading || Colors.white} />
      ) : (
        <RNText type="600" size={18} color={colorText || Colors.white}>
          {title}
        </RNText>
      )}
    </RNTouchable>
  );
};

export default RNButton;

const styles = StyleSheet.create({
  container: {
    shadowOpacity: 1.5,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: { width: 0.5, height: 0.5 },
  },
});
