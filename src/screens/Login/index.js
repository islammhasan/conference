import React, {useState} from 'react';
import {Alert, Image, ScrollView, Text} from 'react-native';
import Container from '@components/Container';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../redux/user';
import Button from '@components/Button';
import Input from '../../components/Input';
import {styles} from './styles';
import {images} from '../../assets/images';
import en from '../../locales/en';

export default Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const loggedUser = useSelector(state => state.user.userInfo);

  // console.log('users available', users);

  const user = {
    username: username,
    password: password,
  };

  // const isValid = username.length > 2 && password.length > 2;

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

  const onLogin = () => {
    const validUser = users.find(
      obj =>
        user.username.toLowerCase() === obj.username.toLowerCase() &&
        user.password === obj.password,
    );
    console.log('valid user', validUser);
    if (isValid) {
      dispatch(signIn(user));
      // setLoading(true);
      // console.log('user type', loggedUser.type);

      // if (validUser.type === 'general') {
      //   setLoading(false);
      //   // navigation.navigate('Scanner');
      // } else if (validUser.type === 'admin') {
      //   setLoading(false);
      //   // navigation.navigate('EventsList');
      // } else {
      //   setLoading(false);
      //   // navigation.navigate('EventsList');
      // }
    } else {
      setLoading(false);
      alert(
        'Please enter a valid username and password, it must be 3 characters at least!',
      );
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
        {/* <Button
          style={styles.btn}
          text="ay 7aga"
          onPress={() => navigation.navigate('Dashboard')}
        /> */}
      </ScrollView>
    </Container>
  );
};
