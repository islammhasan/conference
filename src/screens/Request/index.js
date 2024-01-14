import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text} from 'react-native';
import Container from '@components/Container';
import Button from '@components/Button';
import Input from '../../components/Input';
import {styles} from './styles';
import en from '../../locales/en';
import {AxiosClient} from '../../services/api';
import Dropdown from '@components/Dropdown';
import colors from '../../assets/colors';

export default () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [requestType, setRequestType] = useState(null);
  const [RQTypesList, setRQTypesList] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [RQLoading, setRQLoading] = useState(false);
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    getRequestTypes();
  }, []);

  const getRequestTypes = async () => {
    setRQLoading(true);
    try {
      const res = await AxiosClient('user/request-type');
      if (res.data.types) {
        setRQTypesList(
          Object.entries(res?.data?.types).map(([key, value]) => ({
            label: value,
            id: key,
          })),
        );
        setIsReady(true);
        setRQLoading(false);
      } else {
        Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
          {text: en.ok},
        ]);
        setIsReady(false);
        setRQLoading(false);
      }
    } catch (error) {
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
      setIsReady(false);
      setRQLoading(false);
    }
  };

  const isValid =
    // title.length > 0 &&
    subject.length > 0 && Boolean(requestType) && message.length > 0;

  const data = {
    // title: title,
    subject: subject,
    request_type: requestType,
    message: message,
  };

  function clear() {
    setTitle('');
    setSubject('');
    setRequestType(null);
    setMessage('');
  }

  const sendRequest = async () => {
    setLoading(true);
    try {
      const res = await AxiosClient(`user/submit-request`, {body: data});
      console.log('res from request', res.data);
      Alert.alert(null, en.yourRequestHasBeenSentSuccessfully, [{text: en.ok}]);
      setLoading(false);
      clear();
    } catch (error) {
      console.log('error on send request function', error);
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
      setLoading(false);
    }
  };

  const submit = async () => {
    if (isValid) {
      sendRequest();
    } else {
      Alert.alert(null, en.validation.pleaseFillAllFields, [{text: en.ok}]);
    }
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
        }}>
        {isReady ? (
          <>
            {/* <Input
              placeholder={'Title'}
              value={title}
              onChangeText={val => setTitle(val)}
              style={styles.input}
            /> */}
            <Input
              placeholder={'Subject'}
              value={subject}
              onChangeText={val => setSubject(val)}
              style={styles.input}
            />
            <Dropdown
              values={RQTypesList}
              value={requestType}
              setValue={setRequestType}
              listMode={'SCROLLVIEW'}
              placeholder={'Select Request Type'}
              style={styles.picker}
              dropDownStyle={styles.pickerDropDown}
            />
            <Input
              placeholder={'Message'}
              value={message}
              onChangeText={val => setMessage(val)}
              containerStyle={{height: null}}
              multiline
              numberOfLines={4}
            />
            <Button
              style={styles.btn}
              loading={loading}
              onPress={submit}
              text={'Submit Request'}
            />
          </>
        ) : (
          <>
            <Text style={styles.failedText}>
              {en.validation.failedToGetRequestTypes}
            </Text>
            <Button
              style={styles.reloadBtn}
              loading={RQLoading}
              textStyle={styles.reloadingText}
              loaderColor={colors.darkgray}
              onPress={getRequestTypes}
              text={'Try again'}
            />
          </>
        )}
      </ScrollView>
    </Container>
  );
};
