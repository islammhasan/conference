import React, {useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import Container from '@components/Container';
import Button from '@components/Button';
import Input from '../../components/Input';
import {styles} from './styles';
import en from '../../locales/en';
import {useDispatch} from 'react-redux';
import {changePassword} from '../../redux/user';

export default Login = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const isValid =
    oldPassword.length > 2 && password.length > 2 && rePassword.length > 2;
  const passwordMatch = password === rePassword;

  const data = {
    oldPassword: oldPassword,
    newPassword: password,
    confirmPassword: rePassword,
  };

  const submit = async () => {
    if (isValid) {
      if (passwordMatch) {
        setLoading(true);
        await dispatch(changePassword(data));
        setLoading(false);
      } else {
        Alert.alert(null, en.validation.passwordNotMatch, [{text: en.ok}]);
      }
    } else {
      setLoading(false);
      Alert.alert(null, en.validation.allFieldsMustBe3CharactersAtLeast, [
        {text: en.ok},
      ]);
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
          placeholder={'Old Password'}
          secureTextEntry
          value={oldPassword}
          onChangeText={val => setOldPassword(val)}
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
