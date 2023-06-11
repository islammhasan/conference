import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Container from '@components/Container';
import Loader from '@components/Loader';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/user';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onLogout = async () => {
    setLoading(true);
    await dispatch(logout());
    setLoading(false);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.nav)}
        activeOpacity={0.8}
        style={styles.itemContainer}>
        <Text numberOfLines={2} style={styles.itemText}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const footerComponent = () => {
    return (
      <TouchableOpacity
        onPress={onLogout}
        activeOpacity={0.8}
        style={styles.itemContainer}>
        <Text numberOfLines={1} style={styles.itemText}>
          Logout
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      {loading && <Loader />}
      <Text style={styles.title}>Dashboard</Text>
      <FlatList
        data={ITEMS}
        contentContainerStyle={styles.listStyle}
        keyExtractor={item => item.id}
        ListFooterComponent={footerComponent}
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
    title: 'Password Change',
    nav: 'PasswordChange',
  },
];
