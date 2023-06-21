import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  title: {
    marginStart: 20,
    fontSize: 20,
    color: colors.black,
    marginTop: 20,
  },
  listStyle: {
    alignSelf: 'center',
    minWidth: 351,
    paddingVertical: 20,
  },
  itemContainer: {
    width: 167.5,
    height: 162,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
    paddingVertical: 25,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  // innerContainer: {
  //   width: 140,
  //   height: 180,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: colors.gray,
  //   marginBottom: 5,
  // },
  itemText: {
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 21,
    color: colors.white,
    marginTop: 8,
  },
});
