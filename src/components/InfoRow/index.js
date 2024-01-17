import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

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

const styles = ScaledSheet.create({
  infoRow: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginHorizontal: scale(16),
    paddingVertical: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(15),
    color: '#6F767E',
    marginEnd: scale(20),
  },
  desc: {
    fontSize: moderateScale(14),
    color: colors.black,
    flex: 1,
    textAlign: 'right',
  },
});
