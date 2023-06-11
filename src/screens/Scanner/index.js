import React, {useEffect, useLayoutEffect} from 'react';
import {Text, Alert, TouchableOpacity} from 'react-native';
import Container from '@components/Container';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/user';
import {styles} from './styles';
import en from '../../locales/en';
import {AxiosClient} from '../../services/api';

export default Scanner = ({navigation, route}) => {
  // const [data, setData] = useState(null);
  const loggedUserType = useSelector(state => state?.user?.userInfo?.roles_id);
  const isExhibitor = loggedUserType === 4;
  const isGen = loggedUserType === 1;
  const isAdmin = loggedUserType === 2;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: isGen && Logout,
    });
  }, [navigation]);

  const Logout = () => {
    return (
      <TouchableOpacity
        onPress={() => dispatch(logout())}
        style={styles.logoutBtn}>
        <Text style={styles.logoutTxt}>Logout</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {}, [isFocused]);

  const addAttendance = async (refId, eventId) => {
    try {
      const res = await AxiosClient(`user/attendance`, {
        body: {
          reference_id: refId,
          event_id: eventId,
        },
      });
      if (res.data.attendee) {
        Alert.alert(null, en.successfullyAddedToTheAttendanceList, [
          {text: en.ok},
        ]);
        navigation.navigate('UserProfile', {
          refId: res?.data?.attendee?.reference_id,
        });
      } else {
        Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
          {text: en.ok},
        ]);
      }
      console.log('add attendee res ==>', res);
    } catch (error) {
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
      console.log('error from add attendee', error);
    }
  };

  const onSuccess = e => {
    console.log('response', e.data);

    if (isGen) {
      Alert.alert(
        null,
        `You scanned ${e.data} and it has been registered as attendee`,
        [
          {
            text: 'Ok',
          },
        ],
      );
    } else if (isExhibitor) {
      addAttendance(e.data, route?.params?.eventId);
    } else if (isAdmin) {
      navigation.navigate('UserProfile', {refId: e.data});
    } else {
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: 'Ok'},
      ]);
    }
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
