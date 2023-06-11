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
    height: 196,
    marginHorizontal: 20,
    backgroundColor: colors.offWhite,
    padding: 8,
    borderRadius: 8,
  },
  eventInfoContainer: {
    flexDirection: 'row',
  },
  eventInfoInner: {
    paddingVertical: 8,
    flex: 1,
  },
  eventImageContainer: {
    width: 105,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginEnd: 20,
  },
  eventImage: {
    width: 105,
    height: 80,
  },
  eventItemText: {
    fontSize: 16,
    color: colors.black,
  },
  eventLocationContainer: {
    maxWidth: '50%',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 4,
    marginEnd: 12,
    paddingHorizontal: 10,
  },
  locationDateSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  eventLocationText: {
    fontSize: 12,
    color: colors.black,
  },
  eventDate: {
    color: colors.gray,
    fontSize: 15,
    flex: 1,
  },
  eventDescription: {
    fontSize: 13,
    color: colors.darkgray,
  },
});
