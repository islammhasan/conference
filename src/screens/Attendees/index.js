import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '@components/Container';
import {useDispatch, useSelector} from 'react-redux';
import en from '../../locales/en';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '@components/Button';
import colors from '../../assets/colors';
import {getAttendanceList} from '../../redux/attendance';

export default ({navigation, route}) => {
  const attendanceList = useSelector(state => state.attendance.attendanceList);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  console.log('attendance list =>', attendanceList);

  const getData = async () => {
    await dispatch(getAttendanceList());
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('UserProfile', {user: item})}
        style={styles.itemContainer}>
        <Text numberOfLines={1} style={styles.itemText}>
          {item?.title || en.defaultText}
        </Text>
        <Icon name={'chevron-forward'} size={24} color={colors.gray} />
      </TouchableOpacity>
    );
  };

  const separator = () => {
    return <View style={{height: 10}} />;
  };

  return (
    <Container>
      <Text style={styles.title}>{en.attendees}</Text>
      <FlatList
        data={attendanceList}
        contentContainerStyle={styles.listStyle}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            tintColor={colors.gray}
            onRefresh={getData}
          />
        }
        // ListFooterComponent={footerComponent}
      />
      <Button
        style={styles.btn}
        textStyle={styles.btnTxt}
        onPress={() => navigation.navigate('EventsList')}
        text={en.scanNewAttendee}
      />
    </Container>
  );
};
