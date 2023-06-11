import React, {useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Container from '@components/Container';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {images} from '../../assets/images';
import {getEvents} from '../../redux/userdata';
import {useDispatch, useSelector} from 'react-redux';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.userdata.events);

  console.log('events in screen =>', events);

  const EventItem = ({item}) => {
    const strippedDesc = item?.description?.replace(
      /(<([^>]+)>|[$@^]|&[a-z]+;|&#\d+;)/gi,
      '',
    );
    const date = item?.end_date?.slice(0, 10);

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Scanner', {eventId: item.id})}
        style={styles.eventItemContainer}>
        <View style={styles.eventInfoContainer}>
          <View style={styles.eventImageContainer}>
            <Image
              source={{uri: `${item.image}`} || images.event}
              style={styles.eventImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.eventInfoInner}>
            <Text style={styles.eventItemText}>
              {item?.title || 'NO TITLE'}
            </Text>
            <View style={styles.locationDateSection}>
              <View style={styles.eventLocationContainer}>
                <Text numberOfLines={1} style={styles.eventLocationText}>
                  {item?.location || 'Doha'}
                </Text>
              </View>
              <Text numberOfLines={1} style={styles.eventDate}>
                {date || `NO DATE`}
              </Text>
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

  const separator = () => {
    return <View style={{height: 8}} />;
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await dispatch(getEvents());
  };

  return (
    <Container>
      <Text style={styles.title}>Events list</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={EventItem}
        ItemSeparatorComponent={separator}
      />
    </Container>
  );
};

// const EVENTS = [
//   {
//     id: '182hd',
//     name: 'Event 1',
//     location: 'Doha',
//     date: '09.02.2023',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
//     image: images.event,
//   },
//   {
//     id: 'f103h',
//     name: 'Event 2',
//     location: 'Doha',
//     date: '09.02.2023',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//     image: images.event,
//   },
//   {
//     id: 'f1u2',
//     name: 'Event 3',
//     location: 'Doha',
//     date: '09.02.2023',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//     image: images.event,
//   },
//   {
//     id: '09f12',
//     name: 'Event 4',
//     location: 'Doha',
//     date: '09.02.2023',
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
//     image: images.event,
//   },
// ];
