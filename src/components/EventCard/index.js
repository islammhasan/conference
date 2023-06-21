import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {images} from '../../assets/images';
import colors from '../../assets/colors';

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

const styles = {
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
    backgroundColor: colors.white,
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
    // maxWidth: '50%',
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
    color: colors.black,
    fontSize: 15,
    // flex: 1,
  },
  eventDescription: {
    fontSize: 13,
    color: colors.darkgray,
  },
};
