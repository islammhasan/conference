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
    color: colors.black,
    marginTop: scale(20),
  },
  listStyle: {
    // alignSelf: 'center',
    // minWidth: scale(375),
    paddingVertical: scale(20),
    paddingHorizontal: scale(16),
  },
  itemText: {
    fontSize: moderateScale(14),
    textAlign: 'left',
    lineHeight: scale(21),
    color: colors.white,
    marginTop: scale(8),
  },
});
