import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export const styles = ScaledSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    alignItems: 'center',
    paddingTop: scale(26),
    paddingBottom: scale(5),
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: scale(8),
    justifyContent: 'center',
    marginBottom: scale(20),
    marginTop: scale(24),
  },
  tabBtn: {
    width: scale(167),
    height: scale(40),
    backgroundColor: colors.primary,
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: moderateScale(14),
    color: colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  heading: {
    fontSize: moderateScale(16),
    color: colors.black,
    fontWeight: '400',
    marginBottom: scale(16),
  },
  insightsContainer: {
    paddingHorizontal: scale(16),
    backgroundColor: colors.white,
  },
  numberTxt: {
    fontSize: moderateScale(40),
    color: colors.text,
    fontWeight: '700',
    marginEnd: scale(8),
  },
  rateContainer: {
    flexDirection: 'row',
    backgroundColor: colors.rateBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(48),
    padding: scale(8),
    maxWidth: scale(200),
  },
  rateText: {
    color: colors.rateText,
    marginStart: scale(8),
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  attendanceText: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: colors.gray,
    marginTop: scale(10),
  },
  // title: {
  //   marginStart: 20,
  //   fontSize: 20,
  //   color: colors.black,
  //   marginTop: 20,
  //   marginBottom: 10,
  // },
  listStyle: {
    justifyContent: 'center',
    paddingVertical: scale(10),
    gap: scale(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: scale(180),
    height: scale(180),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(25),
    backgroundColor: colors.offWhite,
    marginHorizontal: scale(10),
    padding: scale(5),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  graphStyle: {
    marginVertical: scale(8),
    alignSelf: 'center',
    // borderRadius: 16,
  },
  head: {
    height: scale(40),
    paddingHorizontal: scale(16),
  },
  headText: {
    fontSize: moderateScale(8),
    fontWeight: '500',
    color: colors.gray,
  },
  tableRowText: {
    fontSize: moderateScale(10),
    color: colors.dark,
    fontWeight: '400',
  },
});
