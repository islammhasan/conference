import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export default props => {
  const {
    placeholder,
    style,
    containerStyle,
    separateName,
    actionButton,
    onActionPress,
    keyboardType,
  } = props;

  return (
    <>
      <View style={styles.titleArea}>
        {separateName && <Text style={styles.name}>{placeholder}</Text>}
        {actionButton && (
          <TouchableOpacity onPress={onActionPress}>
            <Text style={styles.actionBtnTxt}>{actionButton}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.container, containerStyle]}>
        <TextInput
          {...props}
          placeholder={!separateName && placeholder ? placeholder : null}
          placeholderTextColor={colors.gray}
          style={[styles.inputStyle, style]}
          keyboardType={keyboardType || 'default'}
        />
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: scale(16),
    height: scale(58),
    borderRadius: scale(12),
    backgroundColor: colors.offWhite,
    justifyContent: 'center',
    paddingHorizontal: scale(12),
    paddingVertical: scale(20),
  },
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(16),
    marginBottom: scale(10),
  },
  actionBtnTxt: {
    color: colors.primary,
    fontSize: moderateScale(12),
    textAlign: 'right',
  },
  inputStyle: {
    color: colors.black,
    fontSize: moderateScale(14),
    height: scale(64),
  },
  name: {
    flex: 1,
    color: colors.black,
  },
});
