import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export default props => {
  const {heading, subHeading, icon, layout, bgColor} = props;

  const isTall = layout === 'tall';
  const isRegular = layout === 'regular';
  const isHorizontal = layout === 'horizontal';

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      {...props}
      style={[
        styles.container,
        isTall && styles.containerLarge,
        isRegular && styles.containerRegular,
        isHorizontal && styles.containerHorizontal,
        {backgroundColor: bgColor || colors.primary},
      ]}>
      <View>
        <Icon name={icon || 'document'} size={scale(20)} color={colors.white} />
        <Text style={styles.text}>{heading}</Text>
        {subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
      </View>
      <Icon
        style={styles.forwardIconStyle}
        name={'arrow-forward'}
        size={scale(20)}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: scale(16),
    paddingHorizontal: scale(16),
    paddingVertical: scale(24),
    width: scale(167),
  },
  containerLarge: {
    width: scale(167),
    height: scale(260),
    // backgroundColor: '#0061FF',
  },
  containerRegular: {
    height: scale(126),
  },
  containerHorizontal: {
    width: scale(343),
    height: scale(104),
  },
  text: {
    color: colors.white,
    fontSize: moderateScale(16),
    marginTop: scale(8),
    fontWeight: '400',
  },
  subHeading: {
    color: colors.lightgray,
    fontSize: moderateScale(12),
    marginTop: scale(4),
    fontWeight: '400',
  },
  forwardIconStyle: {
    position: 'absolute',
    bottom: scale(28),
    end: scale(20),
  },
});
