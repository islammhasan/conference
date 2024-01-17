import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';
import colors from '../../assets/colors';

export const styles = ScaledSheet.create({
  photoBtn: {
    backgroundColor: colors.white,
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    position: 'absolute',
    top: 0,
    end: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBtnInner: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(12.5),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    height: scale(28),
    backgroundColor: colors.secondary,
    paddingHorizontal: scale(8),
    paddingVertical: scale(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(6),
  },
  phone: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: colors.black,
  },
  profileImageContainer: {
    width: scale(72),
    height: scale(72),
    backgroundColor: '#DBFAE9',
    borderRadius: scale(36),
    alignSelf: 'center',
    top: scale(-40),
  },
  profileImageStyle: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(36),
  },
  inputContainer: {
    marginBottom: scale(16),
    height: scale(56),
    backgroundColor: colors.lightgray,
  },
  inputContainerEditing: {
    backgroundColor: colors.offWhite,
  },
  btn: {
    marginVertical: scale(30),
    height: scale(56),
    marginHorizontal: scale(16),
    backgroundColor: colors.offWhite,
  },
  editBTn: {
    marginTop: scale(56),
    height: scale(56),
    marginHorizontal: scale(16),
  },
  editBtnOnEdit: {
    marginVertical: scale(30),
    height: scale(56),
    marginHorizontal: scale(16),
  },
  btnOnEdit: {
    marginTop: scale(56),
    height: scale(56),
    marginHorizontal: scale(16),
    backgroundColor: colors.offWhite,
  },
  btnTxt: {
    fontSize: moderateScale(15),
    color: colors.black,
    fontWeight: 400,
  },
});
