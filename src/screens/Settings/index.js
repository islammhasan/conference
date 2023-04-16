import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/Container';
import {styles} from './styles';

export default ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.nav)}
        activeOpacity={0.8}
        style={styles.itemContainer}>
        <Text numberOfLines={4} style={styles.itemText}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const separator = () => {
    return <View style={{height: 20}} />;
  };

  return (
    <Container>
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={ITEMS}
        contentContainerStyle={styles.listStyle}
        keyExtractor={item => item.id}
        // ItemSeparatorComponent={separator}
        renderItem={renderItem}
      />
    </Container>
  );
};

const ITEMS = [
  {
    id: 'f12o',
    title: 'Profile',
    nav: 'Profile',
  },
  {
    id: 'd9120',
    title: 'Exhibitor Password Change',
    nav: 'PasswordChange',
  },
];
