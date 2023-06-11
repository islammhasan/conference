import {View, ActivityIndicator, Text} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';

export default ({whiteBG}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        start: 0,
        bottom: 0,
        end: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: whiteBG ? colors.white : 'rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}>
      <ActivityIndicator size={'large'} color={colors.primary} />
      <Text
        style={{
          color: colors.primary,
          fontSize: 16,
          marginTop: 10,
          fontWeight: '400',
        }}>
        Loading...
      </Text>
    </View>
  );
};
