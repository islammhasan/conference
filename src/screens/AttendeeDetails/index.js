import React from 'react';
import {Text} from 'react-native';
import Container from '@components/Container';

export default AttendeeDetails = () => {
  return (
    <Container>
      <Text
        style={{
          color: '#333',
          fontSize: 18,
          marginStart: 20,
          marginVertical: 20,
        }}>
        Attendee Details
      </Text>
      <Text
        style={{
          color: '#666',
          fontSize: 18,
          marginStart: 20,
          marginBottom: 10,
        }}>
        Name: Attendee Name
      </Text>
      <Text
        style={{
          color: '#666',
          fontSize: 18,
          marginStart: 20,
          marginBottom: 10,
        }}>
        Phone: +1 234 567 89
      </Text>
      <Text
        style={{
          color: '#666',
          fontSize: 18,
          marginStart: 20,
        }}>
        Entry: 12:36 PM
      </Text>
    </Container>
  );
};
