import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/colors';

export default props => {
  const {text, loading, style} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[style, styles.container]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Text style={styles.txt}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
