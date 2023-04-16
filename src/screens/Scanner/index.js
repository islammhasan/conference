import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Container from '@components/Container';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';

export default Scanner = ({navigation, route}) => {
  // const [data, setData] = useState(null);

  const isFocused = useIsFocused();

  // const isLookup = Boolean(route.params?.lookup);

  // console.log('isLookup', isLookup);

  // const onSuccess = e => {
  //   console.log('response', e.data);
  //   // setData(e.data);
  //   isLookup
  //     ? navigation.navigate('AttendeeDetails')
  //     : Alert.alert(
  //         null,
  //         `You scanned ${e.data} and it has been registered as attendee`,
  //         [
  //           {
  //             text: 'Ok',
  //             // onPress: () => setRetake(true),
  //           },
  //         ],
  //       );
  // };

  useEffect(() => {}, [isFocused]);

  const onSuccess = e => {
    console.log('response', e.data);
    Alert.alert(
      null,
      `You scanned ${e.data} and it has been registered as attendee`,
      [
        {
          text: 'Ok',
        },
      ],
    );
  };

  return (
    <Container>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={5000}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={<Text style={styles.centerText}>Scan QR Code</Text>}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
