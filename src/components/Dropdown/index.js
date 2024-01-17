import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScaledSheet, scale} from 'react-native-size-matters/extend';

export default props => {
  const [open, setOpen] = useState(false);
  const {placeholder, values, theme, textStyle, style, dropDownStyle} = props;

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
      style={style || styles.pickerStyle}
      dropDownContainerStyle={dropDownStyle || styles.dropDownContainerStyle}
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

const styles = ScaledSheet.create({
  pickerStyle: {
    width: scale(343),
    height: scale(50),
    borderWidth: 0,
    backgroundColor: colors.red,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
    alignSelf: 'center',
  },
  dropDownContainerStyle: {
    backgroundColor: colors.white,
    width: scale(343),
    borderRadius: 0,
    borderColor: colors.gray,
    alignSelf: 'center',
  },
  pickerTextStyle: {
    color: colors.gray,
    fontSize: scale(14),
    textAlign: 'left',
  },
});
