import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: scale(16),
    marginTop: scale(16),
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: scale(10),
  },
  infoInner: {
    marginStart: scale(20),
    alignItems: 'flex-start',
    flex: 1,
  },
  phoneContainer: {
    height: scale(28),
    backgroundColor: colors.secondary,
    paddingHorizontal: scale(8),
    paddingVertical: scale(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(6),
  },
  phone: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: colors.black,
  },
  profileImageContainer: {
    width: scale(80),
    height: scale(80),
    backgroundColor: '#DBFAE9',
    borderRadius: scale(8),
  },
  profileImageStyle: {
    width: scale(80),
    height: scale(80),
  },
  additionalInfo: {
    marginTop: scale(16),
  },
});
