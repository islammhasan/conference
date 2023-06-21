import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import en from '../../locales/en';
import colors from '../../assets/colors';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 30,
      }}>
      <Text style={{alignSelf: 'center', fontSize: 16, color: colors.dark}}>
        {en.nothingToShow}
      </Text>
    </View>
  );
};
