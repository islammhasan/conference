import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  title: {
    marginStart: 20,
    fontSize: 18,
    marginVertical: 10,
    color: colors.black,
  },
  eventItemContainer: {
    height: 50,
    marginHorizontal: 20,
    backgroundColor: '#f1f1f1',
    padding: 10,
    justifyContent: 'center',
  },
  eventItemText: {
    fontSize: 16,
    color: colors.black,
  },
});
