import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  heading: {
    marginHorizontal: scale(16),
    textAlign: 'left',
    marginBottom: scale(12),
    fontSize: scale(18),
    color: colors.dark,
  },
  btn: {
    marginTop: scale(56),
    height: scale(56),
    marginHorizontal: scale(16),
  },
  failedText: {
    fontSize: moderateScale(16),
    alignSelf: 'center',
    color: colors.darkgray,
    textAlign: 'center',
  },
  reloadBtn: {
    marginTop: scale(56),
    height: scale(56),
    marginHorizontal: scale(55),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  reloadingText: {
    color: colors.darkgray,
    fontWeight: '400',
  },
  picker: {
    width: scale(343),
    borderWidth: 0,
    marginHorizontal: scale(16),
    height: scale(64),
    borderRadius: scale(12),
    backgroundColor: colors.offWhite,
    paddingHorizontal: scale(12),
    paddingVertical: scale(20),
    marginTop: scale(10),
  },
  pickerDropDown: {
    backgroundColor: colors.white,
    width: scale(343),
    alignSelf: 'center',
    borderRadius: scale(12),
    borderColor: colors.gray,
  },
});
