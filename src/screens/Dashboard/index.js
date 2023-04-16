import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/Container';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default ({navigation}) => {
  const loggedUserType = useSelector(state => state?.user?.userInfo?.type);
  const isAdmin = loggedUserType === 'admin';

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
        data={isAdmin ? ITEMS : ExhibitorDashboard}
        numColumns={2}
        contentContainerStyle={styles.listStyle}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={separator}
        renderItem={renderItem}
      />
    </Container>
  );
};

const ITEMS = [
  {
    id: '1e20',
    title: 'Reports',
    nav: 'Reports',
  },
  {
    id: 'f1j1',
    title: 'Express Registeration',
    nav: 'ExpressRegisteration',
  },
  {
    id: 'd182h',
    title: 'Event Resources',
    nav: 'EventResources',
  },
  {
    id: 'f13j1',
    title: 'Scanner',
    nav: 'EventsList',
  },
  {
    id: 'f19201',
    title: 'Settings',
    nav: 'Settings',
  },
];

const ExhibitorDashboard = [
  {
    id: '1e20',
    title: 'Reports',
    nav: 'Reports',
  },
  {
    id: 'f13j1',
    title: 'Scanner',
    nav: 'Scanner',
  },
  {
    id: 'f19201',
    title: 'Settings',
    nav: 'Settings',
  },
];
