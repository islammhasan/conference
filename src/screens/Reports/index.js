import {View, Text, ScrollView, useWindowDimensions} from 'react-native';
import React from 'react';
import Container from '@components/Container';
import {styles} from './styles';
import Insight from '@components/Insight';
import {BarChart} from 'react-native-chart-kit';

export default () => {
  const data = {
    labels: [
      '08.03.2023',
      '15.03.2023',
      '18.03.2023',
      '22.03.2023',
      '27.03.2023',
      '30.03.2023',
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <Container>
      <ScrollView>
        <Text style={styles.title}>Reports</Text>
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
        {/* <BarChart
          style={styles.graphStyle}
          data={data}
          width={useWindowDimensions().width}
          height={300}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          fromZero
        /> */}
      </ScrollView>
    </Container>
  );
};

const INSIGHTS = [
  {
    id: '1r9h120',
    title: 'All registrars',
    number: 45,
    icon: 'people',
    background: '#fcedfb',
  },
  {
    id: 'f13f9h9',
    title: 'Self Registered',
    number: 22,
    icon: 'pencil',
    background: '#f2edfc',
  },
  {
    id: 'f1hp2h',
    title: 'Manual registrars',
    number: 10,
    icon: 'headset',
    background: '#edfcf5',
  },
  {
    id: 'f199',
    title: 'Exhibitors',
    number: 0,
    icon: 'volume-high',
    background: '#edfafc',
  },
];
