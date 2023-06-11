import React, {useState} from 'react';
import {Alert, ScrollView, Text} from 'react-native';
import Container from '@components/Container';
import Input from '@components/Input';
import Button from '@components/Button';
import {styles} from './styles';
import Dropdown from '@components/Dropdown';
import en from '../../locales/en';
import {AxiosClient} from '../../services/api';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [country, setCountry] = useState(null);
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);

  const body = {
    name,
    email,
    company,
    mobile,
    designation,
  };

  const clear = () => {
    setName('');
    setEmail('');
    setCompany('');
    setDesignation('');
    // setCountry(null);
    setMobile('');
  };

  const validation = {
    name: name.length > 2,
    company: company.length > 2,
    email: email.length > 2,
    designation: designation.length > 2,
    mobile: mobile.length > 2,
    invalidMobile: mobile.length < 10,
  };

  const validFields =
    validation.name &&
    validation.company &&
    validation.email &&
    validation.designation &&
    validation.mobile;

  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{9,}$/;
  const phoneValidation = phoneRegex.test(mobile);

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const register = async () => {
    setLoading(true);
    try {
      const res = await AxiosClient(`user/register`, {body: body});
      console.log('res from register', res.data);
      Alert.alert(null, en.successfullyRegistered, [{text: en.ok}]);
      setLoading(false);
    } catch (error) {
      console.log('error from register ==>', error);
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
      setLoading(false);
    }
  };

  const submit = () => {
    if (!validFields) {
      Alert.alert(null, en.validation.allFieldsMustBe3CharactersAtLeast, [
        {text: en.ok},
      ]);
      // clear();
    } else if (!phoneValidation) {
      Alert.alert(null, en.validation.pleaseEnterAValidMobileNumber, [
        {text: en.ok},
      ]);
    } else if (!validateEmail()) {
      Alert.alert(null, en.validation.pleaseEnterAValidEmail, [{text: en.ok}]);
    } else {
      register();
    }
  };

  return (
    <Container style={{marginTop: 15}}>
      <ScrollView
        contentContainerStyle={{paddingTop: 26}}
        showsVerticalScrollIndicator={false}>
        <Input
          value={name}
          containerStyle={styles.inputContainer}
          onChangeText={val => setName(val)}
          placeholder={'Name'}
          separateName
        />
        <Input
          value={email}
          containerStyle={styles.inputContainer}
          onChangeText={val => setEmail(val)}
          keyboardType={'email-address'}
          placeholder={'Email Address'}
          separateName
        />
        <Input
          value={company}
          containerStyle={styles.inputContainer}
          onChangeText={val => setCompany(val)}
          placeholder={'Company'}
          separateName
        />
        <Input
          value={designation}
          containerStyle={styles.inputContainer}
          onChangeText={val => setDesignation(val)}
          placeholder={'Designation'}
          separateName
        />
        {/* <Dropdown
          values={COUNTRIES}
          value={country}
          setValue={setCountry}
          listMode={'SCROLLVIEW'}
          placeholder={'Country'}
        /> */}
        <Input
          value={mobile}
          containerStyle={styles.inputContainer}
          onChangeText={val => setMobile(val)}
          keyboardType={'phone-pad'}
          placeholder={'Mobile Number'}
          separateName
        />
      </ScrollView>
      <Button
        style={styles.btn}
        loading={loading}
        onPress={submit}
        text={'Register'}
      />
    </Container>
  );
};

const COUNTRIES = [
  {
    id: '8e12h',
    label: 'Qatar',
  },
  {
    id: '2d1h',
    label: 'Emirates',
  },
];
