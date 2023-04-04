import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Container from '@components/Container';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default EventsList = ({navigation}) => {
  const EventItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Attendees', {name: item.name})}
        style={{
          height: 50,
          marginHorizontal: 20,
          backgroundColor: '#f1f1f1',
          padding: 10,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16, color: '#000'}}>
          {item?.name || 'Default text'}
        </Text>
      </TouchableOpacity>
    );
  };

  const separator = () => {
    return <View style={{height: 10}} />;
  };

  return (
    <Container>
      <Text
        style={{
          marginStart: 20,
          fontSize: 18,
          marginVertical: 10,
          color: '#000',
        }}>
        Events list
      </Text>
      <FlatList
        data={EVENTS}
        keyExtractor={item => item.id}
        renderItem={EventItem}
        ItemSeparatorComponent={separator}
      />
    </Container>
  );
};

const EVENTS = [
  {
    id: '182hd',
    name: 'Session 1',
  },
  {
    id: 'f103h',
    name: 'Session 2',
  },
  {
    id: 'f1u2',
    name: 'Session 3',
  },
  {
    id: '09f12',
    name: 'Session 4',
  },
];
