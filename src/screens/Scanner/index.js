import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, Alert, TouchableOpacity, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './styles';
import en from '../../locales/en';
// import {RNCamera} from 'react-native-camera';
import {AxiosClient} from '../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/user';
import {getEvents} from '../../redux/userdata';
import Container from '@components/Container';
import Loader from '@components/Loader';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default Scanner = ({navigation, route}) => {
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDev, setIsDev] = useState(true);
  const loggedUserType = useSelector(state => state?.user?.userInfo?.roles_id);
  // const staffEventId = useSelector(state => state?.userdata?.events[0]?.id);
  const staffEventSlug = useSelector(state => state?.userdata?.events[0]?.slug);
  const isExhibitor = loggedUserType === 4;
  const isGen = loggedUserType === 5;
  const isAdmin = loggedUserType === 2;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.userdata);
  console.log('userinfo ==>', userInfo);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: isGen && Logout,
    });
  }, [navigation]);

  const signOut = async () => {
    setLoading(true);
    await dispatch(logout());
    setLoading(false);
  };

  const Logout = () => {
    return (
      <TouchableOpacity
        onPress={signOut}
        style={styles.logoutBtn}
        disabled={loading}
        activeOpacity={0.8}>
        <Text style={styles.logoutTxt}>Logout</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    isGen && fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    await dispatch(getEvents());
    setLoading(false);
  };

  useEffect(() => {}, [isFocused]);

  const addAttendance = async (refId, eventSlug) => {
    const body = {
      reference_id: refId,
      event: eventSlug,
    };

    try {
      const res = await AxiosClient(`user/attendance`, {body: body});
      if (res.data.attendee) {
        Alert.alert(null, en.successfullyAddedToTheAttendanceList, [
          {text: en.ok},
        ]);
        if (isDev) {
          navigation.navigate('DevLog', {attr: res});
        } else if (!isGen) {
          navigation.navigate('UserProfile', {
            refId: res?.data?.attendee?.reference_id,
            eventSlug: route?.params?.eventSlug,
          });
        }
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
    console.log('QR response', e.data);

    if (isGen) {
      if (staffEventSlug) {
        addAttendance(e.data, staffEventSlug);
      } else {
        Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
          {
            text: 'Ok',
          },
        ]);
      }
    } else if (isExhibitor) {
      addAttendance(e.data, route?.params?.eventSlug);
    } else if (isAdmin) {
      navigation.navigate('UserProfile', {
        refId: e.data,
        eventSlug: route?.params?.eventSlug,
      });
    } else {
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: 'Ok'},
      ]);
    }
  };

  const showScanner =
    (staffEventSlug != undefined && isGen) || isExhibitor || isAdmin;

  const DevCheckbox = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={() => setIsDev(!isDev)}
        onPress={() => navigation.navigate('DevLog')}
        style={{
          gap: 10,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          left: 20,
        }}>
        <View
          style={{
            width: 15,
            height: 15,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isDev && (
            <View style={{width: 8, height: 8, backgroundColor: '#00cc99'}} />
          )}
        </View>
        <Text style={{color: '#000'}}>Developer Mode</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      {!loading ? (
        showScanner ? (
          <>
            <QRCodeScanner
              onRead={onSuccess}
              reactivate={true}
              reactivateTimeout={5000}
              // flashMode={RNCamera.Constants.FlashMode.torch}
              topContent={<Text style={styles.centerText}>Scan QR Code</Text>}
            />
            <DevCheckbox />
          </>
        ) : (
          <View style={styles.noEventsView}>
            <Text style={styles.noEventsText}>
              {en.thereAreNoEventsAssociatedWithThisUser}
            </Text>
          </View>
        )
      ) : (
        <Loader />
      )}
    </Container>
  );
};
