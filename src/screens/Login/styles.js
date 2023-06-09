import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  logo: {
    width: 87,
    height: 96,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
    color: colors.text,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: colors.text,
  },
  subHeading: {
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 32,
    textAlign: 'center',
    marginHorizontal: 20,
    color: colors.text,
  },
  btn: {
    height: 64,
    marginTop: 50,
    marginHorizontal: 16,
    // alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
});
