import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Container from '@components/Container';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../redux/user';
import Button from '@components/Button';
import Input from '../../components/Input';
import {styles} from './styles';

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

  const isValid = username.length > 2 && password.length > 2;

  const Login = () => {
    const validUser = users.find(
      obj =>
        user.username.toLowerCase() === obj.username.toLowerCase() &&
        user.password === obj.password,
    );
    console.log('valid user', validUser);
    if (isValid && validUser) {
      dispatch(signIn(validUser));
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
          placeholder={'Password'}
          secureTextEntry
          value={password}
          onChangeText={val => setPassword(val)}
          style={styles.input}
        />
        <Button
          style={styles.btn}
          loading={loading}
          onPress={Login}
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
