import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/colors';

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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.offWhite,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  actionBtnTxt: {
    color: colors.primary,
    fontSize: 12,
    textAlign: 'right',
  },
  inputStyle: {
    color: colors.black,
    fontSize: 15,
    height: 64,
  },
  name: {
    flex: 1,
    color: colors.black,
  },
});
