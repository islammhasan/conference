import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  title: {
    marginStart: 20,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    color: colors.black,
  },
  listStyle: {
    paddingVertical: 10,
  },
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: colors.offWhite,
    padding: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  itemText: {
    fontSize: 16,
    color: colors.dark,
    flex: 1,
  },
  btn: {
    marginVertical: 10,
    height: 56,
    marginHorizontal: 16,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: 400,
  },
});
