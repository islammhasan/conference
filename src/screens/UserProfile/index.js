import {View, Text, Image, Alert, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import InfoRow from '../../components/InfoRow';
import {styles} from './styles';
import {images} from '../../assets/images';
import en from '../../locales/en';
import {AxiosClient} from '../../services/api';
import Loader from '../../components/Loader';

export default ({route}) => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const {user} = route.params;

  console.log('user ==>', user);

  useEffect(() => {
    !user && getData();
  }, []);

  console.log('info ===>', info);

  const getData = async () => {
    const body = {
      reference_id: `${route?.params?.refId}`,
      event: `${route?.params?.eventSlug}`,
    };
    setLoading(true);
    try {
      const res = await AxiosClient(`user/attendance`, {body: body});
      // console.log('get attendee details ==>', res?.data?.attendee);
      console.log('get attendee details ==>', res);
      if (res?.data?.attendee) {
        setInfo(res?.data?.attendee);
      } else {
        Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
          {text: en.ok},
        ]);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
      console.log('error from get attendee', error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader whiteBG />
      ) : (
        <Container style={{marginTop: 15}}>
          <ScrollView>
            <View style={styles.infoContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={images.profile}
                  resizeMode="contain"
                  style={styles.profileImageStyle}
                />
              </View>
              <View style={styles.infoInner}>
                <Text numberOfLines={1} style={styles.title}>
                  {user?.title || info?.title || en.defaultText}
                </Text>
                <View style={styles.phoneContainer}>
                  <Text numberOfLines={1} style={styles.phone}>
                    {user?.mobile || info?.mobile || en.defaultText}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.additionalInfo}>
              <InfoRow
                title="Email"
                desc={user?.email || info?.email || en.defaultText}
              />
              <InfoRow
                title="Job Title"
                desc={user?.designation || info?.designation || en.defaultText}
              />
              <InfoRow
                title="Company"
                desc={user?.company || info?.company || en.defaultText}
              />
            </View>
          </ScrollView>
        </Container>
      )}
    </>
  );
};
