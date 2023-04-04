import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/Container';

export default Attendees = ({navigation, route}) => {
  const {name} = route.params;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        // onPress={() => navigation.navigate('Attendees', {name: item.name})}
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
        {`${name} Attendees`}
      </Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
        // ListFooterComponent={footerComponent}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Scanner')}
        style={{
          height: 50,
          marginHorizontal: 20,
          marginBottom: 10,
          backgroundColor: '#13d6a2',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, color: '#000'}}>Scan New Attendee</Text>
      </TouchableOpacity>
    </Container>
  );
};

const DATA = [
  {
    id: 'r1hf',
    name: 'Ahmed',
  },
  {
    id: 'hc1h',
    name: 'Ali',
  },
  {
    id: 'c191',
    name: 'Kareem',
  },
  {
    id: 'f891',
    name: 'Mohammad',
  },
];
