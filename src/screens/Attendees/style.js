import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  title: {
    marginStart: scale(20),
    fontSize: moderateScale(20),
    marginTop: scale(20),
    marginBottom: scale(10),
    color: colors.black,
  },
  listStyle: {
    paddingVertical: scale(10),
  },
  itemContainer: {
    height: scale(50),
    flexDirection: 'row',
    marginHorizontal: scale(20),
    backgroundColor: colors.offWhite,
    padding: scale(10),
    alignItems: 'center',
    borderRadius: scale(6),
  },
  itemText: {
    fontSize: moderateScale(16),
    color: colors.dark,
    flex: 1,
  },
  btn: {
    marginVertical: scale(10),
    height: scale(56),
    marginHorizontal: scale(16),
  },
  btnTxt: {
    fontSize: moderateScale(16),
    fontWeight: 400,
  },
});
