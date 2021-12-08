import React from 'react';
import { StyleSheet, Text, View, ViewProps, ActivityIndicator } from 'react-native';
import Utils from '../../utils';
import { Colors } from '../../themes';

interface RNViewProps extends ViewProps {
  fill?: boolean;
  bgColorIndicator?: string;
  bgColorLoading?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  column?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  wrap?: boolean;
  style?: any;
  mTop?: number;
  mBottom?: number;
  mLeft?: number | string;
  mRight?: number | string;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHoz?: number;
  pVer?: number;
  mHoz?: number;
  mVer?: number;
  color?: string;
  h?: number | string;
  w?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  justifyContent?: string;
  alignItems?: string;
  selfCenter?: boolean;
  absolute?: boolean;
  opacity?: number;
  aTop?: number;
  aBottom?: number;
  aLeft?: number;
  aRight?: number;
  tabLabel?: string;
  margin?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomWidth?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomColor?: string;
}

const RNView = ({
  fill,
  children,
  row,
  column,
  alignCenter,
  justifyCenter,
  center,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  mHoz,
  mVer,
  color,
  h,
  w,
  borderRadius,
  borderWidth,
  borderColor,
  justifyContent,
  alignItems,
  selfCenter,
  absolute,
  opacity,
  aTop = 0,
  aBottom = 0,
  aRight = 0,
  aLeft = 0,
  margin,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomWidth,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  wrap,
  isLoading,
  bgColorIndicator,
  bgColorLoading,
  maxHeight,
  minHeight,
  minWidth,
  maxWidth,
  ...more
}: RNViewProps) => {
  return (
    <View
      {...more}
      style={[
        { backgroundColor: isLoading ? Colors.blackB30 : '#FFFFFF' },
        fill && styles.fill,
        row && styles.row,
        column && styles.column,
        alignCenter && styles.alignCenter,
        justifyCenter && styles.justifyCenter,
        center && styles.center,
        mTop && { marginTop: mTop },
        mBottom && { marginBottom: mBottom },
        mLeft && { marginLeft: mLeft },
        mRight && { marginRight: mRight },
        pTop && { paddingTop: pTop },
        pBottom && { paddingBottom: pBottom },
        pLeft && { paddingLeft: pLeft },
        pRight && { paddingRight: pRight },
        pHoz && { paddingHorizontal: pHoz },
        pVer && { paddingVertical: pVer },
        mHoz && { marginHorizontal: mHoz },
        mVer && { marginVertical: mVer },
        margin && { margin },
        borderBottomWidth && { borderBottomWidth },
        borderBottomColor && { borderBottomColor },
        borderTopRightRadius && { borderTopRightRadius },
        borderTopLeftRadius && { borderTopLeftRadius },
        borderBottomLeftRadius && { borderBottomLeftRadius },
        borderBottomRightRadius && { borderBottomRightRadius },
        color && { backgroundColor: color },
        h && { height: h },
        w && { width: w },
        maxHeight && { maxHeight },
        minHeight && { minHeight },
        minWidth && { minWidth },
        maxWidth && { maxWidth },
        borderRadius && { borderRadius: borderRadius },
        borderWidth && { borderWidth: borderWidth },
        borderColor && { borderColor: borderColor },
        justifyContent && { justifyContent: justifyContent },
        alignItems && { alignItems: alignItems },
        selfCenter && styles.selfCenter,
        absolute && {
          ...styles.absolute,
          top: aTop,
          bottom: aBottom,
          right: aRight,
          left: aLeft,
        },
        opacity && { opacity },
        wrap && { flexWrap: 'wrap' },
        style && style,
      ]}
    >
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
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  fill: {
    flex: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
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
