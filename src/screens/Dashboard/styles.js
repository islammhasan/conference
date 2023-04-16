import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  title: {
    marginStart: 20,
    fontSize: 20,
    color: colors.black,
    marginTop: 20,
    marginBottom: 10,
  },
  listStyle: {
    alignSelf: 'center',
    paddingVertical: 10,
  },
  itemContainer: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.offWhite,
    marginHorizontal: 10,
    padding: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    color: colors.black,
  },
});
