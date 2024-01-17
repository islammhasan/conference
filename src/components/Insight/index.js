import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export default props => {
  const {title, number, icon, style, background} = props;
  return (
    <View style={[styles.container, style, {backgroundColor: background}]}>
      <Icon name={icon || 'people'} size={38} color={colors.dark} />
      <Text style={styles.number}>{number}</Text>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: scale(166.5),
    height: scale(166.5),
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2edfc',
    padding: scale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: moderateScale(18),
    color: colors.dark,
    marginTop: scale(15),
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  number: {
    fontSize: moderateScale(40),
    color: colors.dark,
    marginTop: scale(10),
    textAlign: 'center',
  },
});
