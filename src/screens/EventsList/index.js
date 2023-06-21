import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getEvents} from '../../redux/userdata';
// Styles and assets imports
import {styles} from './styles';
import colors from '../../assets/colors';
// Component imports
import Container from '@components/Container';
import EmptyPlaceholder from '@components/EmptyPlaceholder';
import EventCard from '@components/EventCard';
//Localization imports
import en from '../../locales/en';

const EventItem = ({item, navigation}) => {
  const handlePress = () => {
    navigation.navigate('Scanner', {eventId: item.id});
  };

  return <EventCard item={item} handlePress={handlePress} />;
};

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const events = useSelector(state => state?.userdata?.events);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await dispatch(getEvents());
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(getEvents());
    setRefreshing(false);
  };

  const renderSeparator = () => {
    return <View style={{height: 8}} />;
  };

  return (
    <Container>
      <Text style={styles.title}>{en.eventsList}</Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={colors.gray}
          style={{marginTop: 30}}
        />
      ) : (
        <FlatList
          data={events}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => EventItem({item, navigation})}
          contentContainerStyle={{paddingVertical: 15}}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={EmptyPlaceholder}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              tintColor={colors.gray}
              onRefresh={handleRefresh}
            />
          }
        />
      )}
    </Container>
  );
};
