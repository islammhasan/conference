import React, {useState} from 'react';
import {Alert, Image, ScrollView, Text} from 'react-native';
import Container from '@components/Container';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/user';
import Button from '@components/Button';
import Input from '../../components/Input';
import {styles} from './styles';
import {images} from '../../assets/images';
import en from '../../locales/en';

export default Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const user = {
    username: username,
    password: password,
  };

  const validation = {
    username: username.length < 2,
    password: password.length < 2,
    emptyUsername: username.length === 0,
    emptyPassword: password.length === 0,
  };

  const onSubmit = async () => {
    if (validation.emptyUsername || validation.emptyPassword) {
      Alert.alert(null, en.validation.pleaseFillAllFields, [{text: en.ok}]);
    } else if (validation.password || validation.username) {
      Alert.alert(null, en.validation.allFieldsMustBe2CharactersAtLeast, [
        {text: en.ok},
      ]);
    } else {
      setLoading(true);
      await dispatch(signIn(user));
      setLoading(false);
    }
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{paddingTop: 40}}>
        <Image source={images.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>Event App</Text>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subHeading}>
          Welcome! Please log in to access your account. We're glad to have you
          here!"
        </Text>
        <Input
          placeholder={'Username'}
          value={username}
          containerStyle={styles.inputContainer}
          onChangeText={val => setUsername(val)}
        />
        <Input
          placeholder={'Password'}
          secureTextEntry
          value={password}
          onChangeText={val => setPassword(val)}
        />
        <Button
          style={styles.btn}
          loading={loading}
          onPress={onSubmit}
          text={'LOGIN'}
        />
      </ScrollView>
    </Container>
  );
};
