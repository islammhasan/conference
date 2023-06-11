import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

export default InfoRow = ({title, desc}) => {
  return (
    <View style={styles.infoRow}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.desc}>
        {desc}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    color: '#6F767E',
    marginEnd: 20,
  },
  desc: {
    fontSize: 14,
    color: colors.black,
    flex: 1,
    textAlign: 'right',
  },
});
