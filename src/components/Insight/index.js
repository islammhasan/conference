import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';

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

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 190,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2edfc',
    padding: 10,
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
    fontSize: 22,
    color: colors.dark,
    marginTop: 15,
    textAlign: 'center',
  },
  number: {
    fontSize: 40,
    color: colors.dark,
    marginTop: 10,
    textAlign: 'center',
  },
});
