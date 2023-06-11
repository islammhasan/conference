import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  photoBtn: {
    backgroundColor: colors.white,
    width: 32,
    height: 32,
    borderRadius: 16,
    position: 'absolute',
    top: 0,
    end: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBtnInner: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 72,
    height: 72,
    backgroundColor: '#DBFAE9',
    borderRadius: 36,
    alignSelf: 'center',
    top: -40,
  },
  profileImageStyle: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  inputContainer: {
    marginBottom: 16,
    height: 56,
    backgroundColor: colors.lightgray,
  },
  inputContainerEditing: {
    backgroundColor: colors.offWhite,
  },
  btn: {
    marginVertical: 30,
    height: 56,
    marginHorizontal: 16,
    backgroundColor: colors.offWhite,
  },
  editBTn: {
    marginTop: 56,
    height: 56,
    marginHorizontal: 16,
  },
  editBtnOnEdit: {
    marginVertical: 30,
    height: 56,
    marginHorizontal: 16,
  },
  btnOnEdit: {
    marginTop: 56,
    height: 56,
    marginHorizontal: 16,
    backgroundColor: colors.offWhite,
  },
  btnTxt: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 400,
  },
});
