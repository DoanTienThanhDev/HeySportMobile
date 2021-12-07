import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Colors } from '../../themes';

import Utils from '../../utils';
import Navigation from '../../navigation';

interface RNHeaderPageProps {
  title?: string;
  componentId?: string;
  onPressRight?: () => void;
  onPressBack?: () => void;
  iconRight?: string;
  colorIcon?: string;
}

const RNHeaderPage = ({
  title,
  componentId,
  onPressBack,
  onPressRight,
  iconRight,
  colorIcon,
}: RNHeaderPageProps) => {
  const onBack = () => {
    if (onPressBack) {
      onPressBack();
    } else {
      Navigation.pop({ componentId });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnBack} onPress={onBack}>
        <Icon name="chevron-left" size={16} color={Colors.blackB50} />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>{title}</Text>
      <TouchableOpacity style={styles.btnRight} onPress={onPressRight}>
        {!!iconRight && <Icon name={iconRight} size={18} color={colorIcon || Colors.blackB50} />}
      </TouchableOpacity>
    </View>
  );
};

export default RNHeaderPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: Utils?.hasNotch ? 40 : Utils?.isIOS ? 16 : 10,
    paddingBottom: 5,
    borderBottomWidth: Utils.isIOS ? 1 : 0.5,
    borderBottomColor: Colors.blackB10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.blackB5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnBack: {
    marginLeft: 10,
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: Colors.blackB90,
    flex: 1,
  },
  rightTop: {
    width: 50,
    height: 40,
    marginRight: 10,
  },
  btnRight: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 50,
    marginRight: 10,
  },
});
