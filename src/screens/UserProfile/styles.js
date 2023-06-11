import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoInner: {
    marginStart: 20,
    alignItems: 'flex-start',
    flex: 1,
  },
  phoneContainer: {
    height: 28,
    backgroundColor: colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  phone: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#DBFAE9',
    borderRadius: 8,
  },
  profileImageStyle: {
    width: 80,
    height: 80,
  },
  additionalInfo: {
    marginTop: 16,
  },
});
