import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';

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

const styles = {
  itemContainer: {
    width: 167.5,
    height: 162,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
    paddingVertical: 25,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  itemText: {
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 21,
    color: colors.white,
    marginTop: 8,
  },
};
