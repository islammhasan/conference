import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  logo: {
    width: scale(87),
    height: scale(96),
    alignSelf: 'center',
    marginBottom: scale(30),
  },
  title: {
    fontSize: moderateScale(56),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: scale(30),
    color: colors.text,
  },
  heading: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: scale(20),
    color: colors.text,
  },
  subHeading: {
    fontSize: moderateScale(14),
    alignSelf: 'center',
    marginBottom: scale(32),
    textAlign: 'center',
    marginHorizontal: scale(20),
    color: colors.text,
  },
  btn: {
    height: scale(64),
    marginTop: scale(50),
    marginBottom: scale(16),
    marginHorizontal: scale(16),
  },
  inputContainer: {
    marginBottom: scale(12),
  },
});
