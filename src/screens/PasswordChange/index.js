import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Container from '@components/Container';
import Button from '@components/Button';
import Input from '../../components/Input';
import {styles} from './styles';

export default Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);

  const isValid =
    username.length > 2 && password.length > 2 && rePassword.length > 2;
  const passwordMatch = password === rePassword;

  const submit = () => {
    if (isValid) {
      if (passwordMatch) {
        alert('Password changed!');
      } else {
        alert('Password not matched');
      }
    } else {
      setLoading(false);
      alert(
        'Please enter a valid username and password, it must be 3 characters at least!',
      );
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
          placeholder={'Username'}
          value={username}
          onChangeText={val => setUsername(val)}
          style={styles.input}
        />
        <Input
          placeholder={'New Password'}
          secureTextEntry
          value={password}
          onChangeText={val => setPassword(val)}
          style={styles.input}
        />
        <Input
          placeholder={'Repeat Password'}
          secureTextEntry
          value={rePassword}
          onChangeText={val => setRePassword(val)}
          style={styles.input}
        />
        <Button
          style={styles.btn}
          loading={loading}
          onPress={submit}
          text={'Change Password'}
        />
      </ScrollView>
    </Container>
  );
};
