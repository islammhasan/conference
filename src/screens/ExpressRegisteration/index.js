import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import Container from '@components/Container';
import Input from '@components/Input';
import Button from '@components/Button';
import {styles} from './styles';
import Dropdown from '@components/Dropdown';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [job, setJob] = useState('');
  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('vall===>', country);

  const clear = () => {
    setName('');
    setEmail('');
    setCompany('');
    setJob('');
    setCountry(null);
    setPhone('');
  };

  const register = () => {
    const valid =
      Boolean(name) &&
      Boolean(email) &&
      Boolean(company) &&
      Boolean(job) &&
      Boolean(country) &&
      Boolean(phone);
    if (valid) {
      alert('Successfully registered!');
      clear();
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <Input
          value={name}
          style={styles.input}
          onChangeText={val => setName(val)}
          placeholder={'Your Name'}
        />
        <Input
          value={email}
          style={styles.input}
          onChangeText={val => setEmail(val)}
          placeholder={'Email Address'}
        />
        <Input
          value={company}
          style={styles.input}
          onChangeText={val => setCompany(val)}
          placeholder={'Company Name'}
        />
        <Input
          value={job}
          style={styles.input}
          onChangeText={val => setJob(val)}
          placeholder={'Job Title'}
        />
        <Dropdown
          values={COUNTRIES}
          value={country}
          setValue={setCountry}
          listMode={'SCROLLVIEW'}
          placeholder={'Country'}
        />
        <Input
          value={phone}
          style={styles.input}
          onChangeText={val => setPhone(val)}
          placeholder={'Phone Number'}
        />
        <Button
          style={styles.btn}
          loading={loading}
          onPress={register}
          text={'Register'}
        />
      </ScrollView>
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
