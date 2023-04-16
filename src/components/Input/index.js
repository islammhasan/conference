import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../../assets/colors';

export default props => {
  const {placeholder, style} = props;

  return (
    <TextInput
      {...props}
      placeholder={placeholder || 'placeholder'}
      placeholderTextColor={colors.gray}
      style={[style, styles.inputStyle]}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    // marginHorizontal: 50,
    color: colors.black,
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});
