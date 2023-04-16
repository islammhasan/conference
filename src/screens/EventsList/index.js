import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Container from '@components/Container';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';

export default ({navigation}) => {
  const EventItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Scanner')}
        style={styles.eventItemContainer}>
        <Text style={styles.eventItemText}>{item?.name || 'Default text'}</Text>
      </TouchableOpacity>
    );
  };

  const separator = () => {
    return <View style={{height: 10}} />;
  };

  return (
    <Container>
      <Text style={styles.title}>Events list</Text>
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
