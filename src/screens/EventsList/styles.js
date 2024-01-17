import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  title: {
    marginStart: scale(20),
    fontSize: moderateScale(18),
    marginTop: scale(15),
    color: colors.black,
  },
});
