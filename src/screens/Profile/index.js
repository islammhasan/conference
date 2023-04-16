import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {styles} from './styles';

export default () => {
  return (
    <Container>
      <Text numberOfLines={1} style={styles.title}>
        Administrator
      </Text>
    </Container>
  );
};
