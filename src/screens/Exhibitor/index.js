import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '@components/Container';

export default Exhibitor = ({navigation}) => {
  return (
    <Container>
      <Text
        style={{
          alignSelf: 'center',
          marginVertical: 30,
          fontSize: 22,
          color: '#333',
        }}>
        Exhibitor Name
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          marginBottom: 10,
          fontSize: 18,
          color: '#555',
        }}>
        Attendees
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          color: '#999',
        }}>
        25
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        // lookup is for scanner navigation not attendeeDetails
        onPress={() => navigation.navigate('Scanner', {lookup: true})}
        style={{
          height: 50,
          marginHorizontal: 20,
          marginTop: 30,
          backgroundColor: '#13d6a2',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, color: '#000'}}>Look up for attendee</Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 16,
          color: '#999',
          marginVertical: 10,
        }}>
        Or
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Scanner')}
        style={{
          height: 50,
          marginHorizontal: 20,
          backgroundColor: '#13d6a2',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, color: '#000'}}>Scan new attendee</Text>
      </TouchableOpacity>
    </Container>
  );
};
