import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  title: {
    marginStart: scale(16),
    fontSize: moderateScale(20),
    color: colors.black,
    marginVertical: scale(20),
  },
  listStyle: {
    // alignSelf: 'center',
  },
  itemContainer: {
    height: scale(45),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginHorizontal: scale(16),
    padding: scale(5),
  },
  itemText: {
    fontSize: moderateScale(14),
    textAlign: 'left',
    lineHeight: scale(24),
    color: colors.dark,
  },
});
