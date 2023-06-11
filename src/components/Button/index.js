import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/colors';

export default props => {
  const {text, loading, style, textStyle, loaderColor, disabled} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[styles.container, style]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={loaderColor || colors.white} />
      ) : (
        <Text style={[styles.txt, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  txt: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
