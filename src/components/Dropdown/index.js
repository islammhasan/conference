import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

export default props => {
  const [open, setOpen] = useState(false);
  const {placeholder, values, theme, textStyle} = props;

  return (
    <DropDownPicker
      {...props}
      open={open}
      items={values}
      setOpen={setOpen}
      theme={theme || 'LIGHT'}
      schema={{
        label: 'label',
        value: 'id',
      }}
      listMode="SCROLLVIEW"
      style={styles.pickerStyle}
      dropDownContainerStyle={styles.dropDownContainerStyle}
      textStyle={textStyle || styles.pickerTextStyle}
      labelStyle={{color: colors.black}}
      placeholder={placeholder}
      ArrowDownIconComponent={() => (
        <Icon name={'chevron-down'} size={22} color={colors.gray} />
      )}
      ArrowUpIconComponent={() => (
        <Icon name={'chevron-up'} size={22} color={colors.gray} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  pickerStyle: {
    width: '80%',
    height: 50,
    borderWidth: 0,
    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: 'center',
  },
  dropDownContainerStyle: {
    backgroundColor: colors.white,
    width: '80%',
    borderRadius: 0,
    borderColor: colors.gray,
    alignSelf: 'center',
  },
  pickerTextStyle: {
    color: colors.gray,
    fontSize: 16,
    textAlign: 'left',
  },
});
