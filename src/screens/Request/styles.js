import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  btn: {
    marginTop: 56,
    height: 56,
    marginHorizontal: 16,
  },
  failedText: {
    fontSize: 16,
    alignSelf: 'center',
    color: colors.darkgray,
    textAlign: 'center',
  },
  reloadBtn: {
    marginTop: 56,
    height: 56,
    marginHorizontal: 55,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  reloadingText: {
    color: colors.darkgray,
    fontWeight: '400',
  },
  picker: {
    width: 398,
    borderWidth: 0,
    marginHorizontal: 16,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.offWhite,
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginTop: 10,
  },
  pickerDropDown: {
    backgroundColor: colors.white,
    width: 398,
    alignSelf: 'center',
    borderRadius: 12,
    borderColor: colors.gray,
  },
});
