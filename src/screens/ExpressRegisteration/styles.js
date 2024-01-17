import {ScaledSheet, scale} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  btn: {
    marginVertical: scale(10),
    height: scale(56),
    marginHorizontal: scale(16),
  },
  inputContainer: {
    marginBottom: scale(12),
    height: scale(56),
  },
});
