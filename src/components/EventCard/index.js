import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {images} from '../../assets/images';
import colors from '../../assets/colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';

export default ({item, handlePress}) => {
  const strippedDesc = item.description?.replace(
    /(<([^>]+)>|[$@^]|&[a-z]+;|&#\d+;)/gi,
    '',
  );
  const date = item.end_date?.slice(0, 10);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={styles.eventItemContainer}>
      <View style={styles.eventInfoContainer}>
        <View style={styles.eventImageContainer}>
          <Image
            source={{uri: item.image || images.event}}
            style={styles.eventImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.eventInfoInner}>
          <Text style={styles.eventItemText}>{item.title || 'NO TITLE'}</Text>
          <View style={styles.locationDateSection}>
            <View style={styles.eventLocationContainer}>
              {/* <Text numberOfLines={1} style={styles.eventLocationText}>
                {item.location || 'Doha'}
              </Text> */}
              <Text numberOfLines={1} style={styles.eventDate}>
                {date || 'NO DATE'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        numberOfLines={1}
        style={[styles.eventDescription, {marginTop: 12}]}>
        Description:
      </Text>
      <Text numberOfLines={4} style={[styles.eventDescription, {flex: 1}]}>
        {strippedDesc || 'NO DESCRIPTION'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  eventItemContainer: {
    height: scale(196),
    marginHorizontal: scale(20),
    backgroundColor: colors.offWhite,
    padding: scale(8),
    borderRadius: scale(8),
  },
  eventInfoContainer: {
    flexDirection: 'row',
  },
  eventInfoInner: {
    paddingVertical: scale(8),
    flex: 1,
  },
  eventImageContainer: {
    width: scale(105),
    height: scale(80),
    borderRadius: scale(8),
    overflow: 'hidden',
    marginEnd: scale(20),
    backgroundColor: colors.white,
  },
  eventImage: {
    width: scale(105),
    height: scale(80),
  },
  eventItemText: {
    fontSize: moderateScale(16),
    color: colors.black,
  },
  eventLocationContainer: {
    // maxWidth: '50%',
    height: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: scale(4),
    marginEnd: scale(12),
    paddingHorizontal: scale(10),
  },
  locationDateSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10),
  },
  eventLocationText: {
    fontSize: moderateScale(12),
    color: colors.black,
  },
  eventDate: {
    color: colors.black,
    fontSize: moderateScale(15),
    // flex: 1,
  },
  eventDescription: {
    fontSize: moderateScale(13),
    color: colors.darkgray,
  },
});
