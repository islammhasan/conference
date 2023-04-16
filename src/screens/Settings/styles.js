import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  title: {
    marginStart: 20,
    fontSize: 20,
    color: colors.black,
    marginVertical: 20,
  },
  listStyle: {
    // alignSelf: 'center',
  },
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginHorizontal: 20,
    padding: 5,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 24,
    color: colors.dark,
  },
});
