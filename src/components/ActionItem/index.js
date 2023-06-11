import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';

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
        <Icon name={icon || 'document'} size={20} color={colors.white} />
        <Text style={styles.text}>{heading}</Text>
        {subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
      </View>
      <Icon
        style={styles.forwardIconStyle}
        name={'arrow-forward'}
        size={20}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: 167,
  },
  containerLarge: {
    width: 167,
    height: 260,
    // backgroundColor: '#0061FF',
  },
  containerRegular: {
    height: 126,
  },
  containerHorizontal: {
    width: 343,
    height: 104,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    marginTop: 8,
    fontWeight: '400',
  },
  subHeading: {
    color: colors.lightgray,
    fontSize: 12,
    marginTop: 4,
    fontWeight: '400',
  },
  forwardIconStyle: {
    position: 'absolute',
    bottom: 28,
    end: 20,
  },
});
