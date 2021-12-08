import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import RNIcon from 'react-native-vector-icons/FontAwesome5';

import RNText from './RNText';
import RNView from './RNView';

import { Colors } from '../../themes';
import Utils from '../../utils';
import RNTouchable from './RNTouchable';

interface RNInputProps extends TextInputProps {
  isSecurity?: boolean;
  error?: string;
  label: string;
  style?: any;
  w?: number | string;
  h?: number | string;
  mHoz?: number;
  fill?: boolean;
  mVer?: number;
  pHoz?: number;
  pVer?: number;
  mLeft?: number;
  mRight?: number;
  mTop?: number;
  mBottom?: number;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const RNInput = ({
  isSecurity,
  error,
  multiline = false,
  value = '',
  keyboardType,
  label,
  returnKeyType,
  style,
  w,
  h,
  fill,
  mHoz,
  mVer,
  pHoz,
  pVer,
  mLeft,
  mRight,
  mTop,
  mBottom,
  onChangeText,
  onSubmitEditing,
  textAlignVertical,
  onFocus,
  onBlur,
}: RNInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  return (
    <RNView
      column
      h={h || !!error ? 64 : 58}
      mVer={mVer || !!error ? 12 : 10}
      style={style}
      w={w}
      fill={fill}
      mHoz={mHoz}
      pHoz={pHoz}
      pVer={pVer}
      mLeft={mLeft}
      mRight={mRight}
      mBottom={mBottom}
      mTop={mTop}
    >
      <RNView
        h={58}
        borderRadius={12}
        pHoz={10}
        borderWidth={isFocus ? 2 : 1}
        borderColor={isFocus ? Colors.primary : Colors.black10}
        alignCenter
        pVer={5}
        row
      >
        <RNView fill justifyCenter>
          {isFocus && (
            <RNText size={14} type="400" color={Colors.blackB30} mLeft={Utils.isIOS ? 0 : 3}>
              {label}
            </RNText>
          )}
          <TextInput
            placeholder={label}
            onFocus={() => {
              setIsFocus(true);
              onFocus && onFocus();
            }}
            onBlur={() => {
              setIsFocus(false);
              onBlur && onBlur();
            }}
            placeholderTextColor={Colors.blackB30}
            style={(styles.container, { paddingVertical: isFocus ? (Utils.isIOS ? 4 : 0) : 8 })}
            secureTextEntry={isPassword && isSecurity}
            value={value}
            multiline={multiline}
            caretHidden={false}
            autoCorrect={false}
            allowFontScaling={false}
            blurOnSubmit={false}
            autoCapitalize="none"
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            textAlignVertical={textAlignVertical}
            spellCheck={false}
          />
        </RNView>
        {isSecurity && (
          <RNTouchable
            h={40}
            w={40}
            center
            onPress={() => {
              setIsPassword(!isPassword);
            }}
            disabled={!isSecurity}
          >
            <RNIcon name={isPassword ? 'eye-slash' : 'eye'} size={20} color={Colors.blackB50} />
          </RNTouchable>
        )}
      </RNView>
      {!!error && (
        <RNText color={'red'} type="400" size={12} mTop={1} lineHeight={16} lines={1} mLeft={5}>
          {error}
        </RNText>
      )}
    </RNView>
  );
};

export default RNInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black10,
    fontSize: 14,
    color: Colors.blackB90,
  },
});
