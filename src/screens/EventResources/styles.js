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
    alignSelf: 'center',
  },
  itemContainer: {
    width: 140,
    marginHorizontal: 15,
  },
  innerContainer: {
    width: 140,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: colors.black,
  },
});
