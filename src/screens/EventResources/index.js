import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/Container';
import {styles} from './styles';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('PDFReader', {url: item.url})}
        activeOpacity={0.8}
        style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Icon name={'document'} size={48} color={colors.white} />
        </View>
        <Text numberOfLines={2} style={styles.itemText}>
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
      <Text style={styles.title}>Event Resources</Text>
      <FlatList
        data={ITEMS}
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
    id: 'f109f1',
    title: 'PDF Demo',
    url: 'https://www.africau.edu/images/default/sample.pdf',
  },
  {
    id: 'f1j1',
    title: 'PDF Demo 2',
    url: 'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
  },
  {
    id: 'd182h',
    title: 'PDF Demo 3',
    url: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
  },
];
