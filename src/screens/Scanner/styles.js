import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  centerText: {
    flex: 1,
    fontSize: moderateScale(18),
    padding: scale(32),
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: colors.black,
  },
  buttonText: {
    fontSize: moderateScale(21),
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: scale(16),
  },
  logoutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
  },
  logoutTxt: {
    fontSize: moderateScale(16),
    color: colors.red,
  },
  noEventsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(30),
  },
  noEventsText: {
    fontSize: moderateScale(16),
    color: colors.black,
  },
});
