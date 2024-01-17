import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import en from '../../locales/en';
import colors from '../../assets/colors';
import {moderateScale, scale} from 'react-native-size-matters/extend';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(30),
        marginTop: scale(30),
      }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: moderateScale(16),
          color: colors.dark,
        }}>
        {en.nothingToShow}
      </Text>
    </View>
  );
};
