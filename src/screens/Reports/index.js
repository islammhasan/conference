import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Container from '@components/Container';
import {styles} from './styles';
import Insight from '@components/Insight';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Table, Row, Rows} from 'react-native-reanimated-table';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryContainer,
  VictoryLabel,
  VictoryTheme,
  VictoryTooltip,
} from 'victory-native';
import {useSelector} from 'react-redux';

export default ({navigation}) => {
  const [activeBar, setActiveBar] = useState(null);
  const [selectedTab, setSelectedTab] = useState(1);
  const attSelected = selectedTab === 1;
  const {attendanceReport, attendanceCount, regReport, attendanceList} =
    useSelector(state => state?.attendance);

  const {allRegistrar, selfRegistrar, manualRegistrar, exhibitorRegistrar} =
    regReport;

  console.log('regReport in screen =>', regReport);
  // console.log('report in screen =>', allResgistrar);

  const tableHead = ['Name', 'Phone', 'Email'];
  const tableData = attendanceList
    .filter(obj => obj.title)
    .map(({title, mobile, email}) => [title, mobile, email]);
  console.log('new att list array', tableData);

  const handlePress = (event, datum) => {
    setActiveBar(datum.index);
  };

  const CustomTooltip = ({datum}) => (
    <VictoryTooltip
      {...datum}
      flyoutStyle={{stroke: 'black'}}
      cornerRadius={0}
      pointerLength={10}
      flyoutWidth={100}
      flyoutHeight={50}
      renderInPortal={false}
    />
  );

  const INSIGHTS = [
    {
      id: '1r9h120',
      title: 'All registrars',
      number: allRegistrar,
      icon: 'people',
      background: '#fcedfb',
    },
    {
      id: 'f13f9h9',
      title: 'Self Registered',
      number: selfRegistrar,
      icon: 'pencil',
      background: '#f2edfc',
    },
    {
      id: 'f1hp2h',
      title: 'Manual registrars',
      number: manualRegistrar,
      icon: 'headset',
      background: '#edfcf5',
    },
    {
      id: 'f199',
      title: 'Exhibitors',
      number: exhibitorRegistrar,
      icon: 'volume-high',
      background: '#edfafc',
    },
  ];

  return (
    <>
      <View style={{height: 15}} />
      <Container>
        <ScrollView>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              onPress={() => setSelectedTab(1)}
              activeOpacity={0.9}
              style={[
                styles.tabBtn,
                !attSelected && {backgroundColor: '#FCFCFC'},
              ]}>
              <Text
                style={[styles.tabText, !attSelected && {color: colors.text}]}>
                Attendance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setSelectedTab(2)}
              style={[
                styles.tabBtn,
                attSelected && {backgroundColor: '#FCFCFC'},
              ]}>
              <Text
                style={[styles.tabText, attSelected && {color: colors.text}]}>
                Registeration
              </Text>
            </TouchableOpacity>
          </View>
          {attSelected ? (
            <>
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
              <Table>
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.headText}
                />
                {/* <Rows data={tableData} textStyle={styles.text} /> */}
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    style={[
                      {
                        height: 80,
                        backgroundColor: colors.white,
                        paddingHorizontal: 16,
                      },
                      index % 2 && {backgroundColor: '#f8f8f8'},
                    ]}
                    textStyle={styles.tableRowText}
                  />
                ))}
              </Table>
            </>
          ) : (
            <View style={styles.listStyle}>
              {INSIGHTS.map(item => {
                const {id, title, number, background, icon} = item;
                return (
                  <Insight
                    key={id}
                    title={title}
                    number={number}
                    background={background}
                    icon={icon}
                  />
                );
              })}
            </View>
          )}
        </ScrollView>
      </Container>
    </>
  );
};

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
