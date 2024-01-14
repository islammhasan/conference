import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Container from '@components/Container';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';
import ActionItem from '@components/ActionItem';
import {images} from '../../assets/images';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryContainer,
  VictoryLabel,
  VictoryTheme,
  VictoryTooltip,
} from 'victory-native';
import {
  addAttendance,
  getAttendanceList,
  getAttendanceReport,
  getAttendeeDetails,
  getRegReport,
} from '../../redux/attendance';
import {getProfile} from '../../redux/user';

export default ({navigation}) => {
  const loggedUserType = useSelector(state => state?.user?.userInfo?.role_name);
  const {attendanceReport, attendanceCount} = useSelector(
    state => state?.attendance,
  );
  const [activeBar, setActiveBar] = useState(null);
  const dispatch = useDispatch();

  const isAdmin = loggedUserType === 'admin';

  const getData = async () => {
    await dispatch(getAttendanceReport());
    await dispatch(getRegReport());
    await dispatch(getAttendanceList());
    // await dispatch(getAttendeeDetails());
    // await dispatch(addAttendance());
    await dispatch(getProfile());
  };

  useEffect(() => {
    getData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: Logo,
      headerRight: profile,
    });
  }, [navigation]);

  const Logo = () => {
    return (
      <View style={styles.logoContainer}>
        <Image
          style={{width: 28, height: 31}}
          resizeMode="contain"
          source={images.logo}
        />
        <View>
          <Text style={styles.logoHeading}>Welcome</Text>
          <Text style={styles.logoSubHeading}>Kids Expo</Text>
        </View>
      </View>
    );
  };

  const profile = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Settings')}
        style={styles.profileBtn}>
        <View style={styles.profileImageContainer}>
          <Image
            resizeMode="cover"
            style={styles.profileImage}
            source={images.profile}
          />
        </View>
      </TouchableOpacity>
    );
  };

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

  const handlePress = (event, datum) => {
    setActiveBar(datum.index);
  };

  // const CustomTooltip = ({datum}) => (
  //   <VictoryTooltip
  //     {...datum}
  //     flyoutStyle={{stroke: 'black'}}
  //     cornerRadius={0}
  //     pointerLength={10}
  //     flyoutWidth={100}
  //     flyoutHeight={50}
  //     renderInPortal={false}
  //   />
  // );
  const CustomTooltip = ({datum}) => (
    <VictoryTooltip
      style={{fill: 'black'}}
      flyoutStyle={{stroke: 'tomato'}}
      cornerRadius={5}
      pointerLength={10}
      text={`${datum.x}: ${datum.y}`}
      renderInPortal={false}
    />
  );
  return (
    <>
      <View style={{height: 15}} />
      <Container style={{backgroundColor: null}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text numberOfLines={1} style={styles.title}>
              Attendance
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Reports')}
              activeOpacity={0.8}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.reportIcon}>
                <Icon
                  style={{marginStart: -4}}
                  name={'trending-up'}
                  size={20}
                  color={colors.primary}
                />
              </View>
              <Text numberOfLines={1} style={styles.reportText}>
                Report
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.insightsContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.numberTxt}>{attendanceCount}</Text>
              {/* <View style={styles.rateContainer}>
                <Icon name={'trending-up'} size={22} color={colors.rateText} />
                <Text style={styles.rateText}>+12,7 %</Text>
              </View> */}
            </View>
            {/* <Text style={styles.attendanceText}>
              Attendance is more vs. last week
            </Text> */}
          </View>
          <VictoryChart
            animate={{
              duration: 1000,
            }}
            containerComponent={
              <VictoryContainer style={{backgroundColor: colors.white}} />
            }
            height={200}
            theme={VictoryTheme.material}>
            <VictoryAxis style={{axis: {stroke: null}}} />
            {/* <VictoryAxis label={<VictoryLabel style={{stroke: 'none'}} />} /> */}
            <VictoryBar
              barWidth={30}
              cornerRadius={{top: 8, bottom: 8}}
              style={{
                data: {
                  fill: ({index}) =>
                    index === activeBar ? colors.primary : colors.lightgray,
                  width: 20,
                },
              }}
              animate={{duration: 200}}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: handlePress,
                  },
                },
              ]}
              // labelComponent={<CustomTooltip />}
              labels={({datum}) => datum.visitors}
              data={attendanceReport}
              x="day"
              y="visitors"
            />
          </VictoryChart>
          <View style={styles.actionsContainer}>
            <Text numberOfLines={1} style={styles.heading}>
              Actions
            </Text>
            <View style={styles.actionsList}>
              <ActionItem
                heading="Event Resources"
                layout="tall"
                icon="document"
                bgColor="#0061FF"
                onPress={() => navigation.navigate('EventResources')}
              />
              <View style={{gap: 8}}>
                <ActionItem
                  heading="Registrars"
                  subHeading="(QR Scan)"
                  layout="regular"
                  icon="reorder-three"
                  onPress={() =>
                    navigation.navigate(isAdmin ? 'Scanner' : 'Attendees')
                  }
                />
                <ActionItem
                  heading="Events List"
                  subHeading="(QR Scan)"
                  layout="regular"
                  icon="calendar"
                  bgColor="#12C5FF"
                  onPress={() => navigation.navigate('EventsList')}
                />
              </View>
              <ActionItem
                heading="Registration"
                layout="horizontal"
                icon="person-add"
                bgColor="#1FDAC4"
                onPress={() => navigation.navigate('ExpressRegisteration')}
              />
            </View>
          </View>
          {/* <FlatList
          data={isAdmin ? ITEMS : ExhibitorDashboard}
          numColumns={2}
          contentContainerStyle={styles.listStyle}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={separator}
          renderItem={renderItem}
        /> */}
        </ScrollView>
      </Container>
    </>
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

// const data = [
//   {
//     day: 'Sat',
//     visitors: 40,
//   },
//   {
//     day: 'Sun',
//     visitors: 60,
//   },
//   {
//     day: 'Mon',
//     visitors: 50,
//   },
//   {
//     day: 'Tue',
//     visitors: 20,
//   },
//   {
//     day: 'Wed',
//     visitors: 30,
//   },
//   {
//     day: 'Thu',
//     visitors: 50,
//   },
// ];
