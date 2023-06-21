import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getResources} from '../../redux/userdata';
// Component imports
import ResourceCard from '../../components/ResourceCard';
import EmptyPlaceholder from '@components/EmptyPlaceholder';
import Container from '@components/Container';
// Styles and assets imports
import colors from '../../assets/colors';
import {styles} from './styles';
// Localization imports
import en from '../../locales/en';

export default ({navigation}) => {
  const data = useSelector(state => state.userdata.resources);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const separator = () => <View style={{height: 8}} />;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await dispatch(getResources());
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(getResources());
    setRefreshing(false);
  };

  function handlePress(item) {
    navigation.navigate('PDFReader', {url: item.url});
  }

  return (
    <Container>
      <Text style={styles.title}>{en.eventResources}</Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={colors.gray}
          style={{marginTop: 30}}
        />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.listStyle}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={separator}
          renderItem={({item}) => (
            <ResourceCard item={item} handlePress={() => handlePress(item)} />
          )}
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
