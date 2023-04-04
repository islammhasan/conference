import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Container from '@components/Container';

export default Login = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isExhibitor = Boolean(route.params?.exhibitor);

  const isValid = username.length > 2 && password.length > 2;

  const Login = () => {
    if (isValid) {
      navigation.navigate(isExhibitor ? 'Exhibitor' : 'EventsList');
    } else {
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
        <TextInput
          placeholder="Username"
          placeholderTextColor={'#ccc'}
          value={username}
          onChangeText={val => setUsername(val)}
          style={{
            marginHorizontal: 50,
            color: '#000',
            height: 50,
            fontSize: 16,
            borderBottomWidth: 1,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#ccc'}
          value={password}
          secureTextEntry={true}
          onChangeText={val => setPassword(val)}
          style={{
            marginHorizontal: 50,
            color: '#000',
            height: 50,
            fontSize: 16,
            borderBottomWidth: 1,
          }}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={Login}
          style={{
            // width: 200,
            height: 50,
            marginTop: 50,
            marginHorizontal: 50,
            backgroundColor: '#13d6a2',
            justifyContent: 'center',
            alignItems: 'center',
            // alignSelf: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
            LOGIN
          </Text>
        </TouchableOpacity>
        {!isExhibitor && (
          <>
            <Text
              style={{
                color: '#888',
                fontSize: 16,
                fontWeight: '600',
                alignSelf: 'center',
                marginTop: 50,
              }}>
              Or
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.push('Login', {exhibitor: true})}
              style={{
                width: 200,
                height: 50,
                marginTop: 25,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{color: '#13d6a2', fontSize: 16, fontWeight: '600'}}>
                Login as Exhibitor
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </Container>
  );
};
