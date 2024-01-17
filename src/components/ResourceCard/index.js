import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export default ({item, handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={styles.itemContainer}>
      <View style={{flex: 1}}>
        <Icon name={'document'} size={30} color={colors.white} />
        <Text numberOfLines={2} style={styles.itemText}>
          {item.title}
        </Text>
      </View>
      <Icon
        name={'download-outline'}
        style={{alignSelf: 'flex-end'}}
        size={22}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  itemContainer: {
    width: scale(163.5),
    height: scale(162),
    backgroundColor: colors.primary,
    marginHorizontal: scale(4),
    paddingVertical: scale(25),
    paddingHorizontal: scale(16),
    borderRadius: scale(16),
  },
  itemText: {
    fontSize: moderateScale(14),
    textAlign: 'left',
    lineHeight: scale(21),
    color: colors.white,
    marginTop: scale(8),
  },
});
