import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Container from '@components/Container';
import InfoRow from '@components/InfoRow';
import {styles} from './styles';
import {images} from '../../assets/images';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors';
import Input from '@components/Input';
import Button from '@components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile, logout, profileUpdate} from '../../redux/user';
import en from '../../locales/en';

export default ({navigation}) => {
  const profileInfo = useSelector(state => state?.user?.userInfo);
  const [name, setName] = useState(profileInfo?.name || 'dummy');
  const [password, setPassword] = useState('123456');
  const [phone, setPhone] = useState(profileInfo.mobile || '791759617');
  const [loading, setLoading] = useState(false);
  const [signoutloading, setSignoutLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();

  const validation = {
    name: name.length < 2,
    phone: phone.length < 10,
  };
  const updatedInfo = {
    name: name,
    mobile: phone,
  };

  console.log('profile info', profileInfo);

  const signOut = async () => {
    setSignoutLoading(true);
    await dispatch(logout());
    setSignoutLoading(false);
  };

  const onEditPress = async () => {
    try {
      if (editing) {
        if (validation.name) {
          Alert.alert(null, en.validation.pleaseEnterAValidName, [
            {text: en.ok},
          ]);
        } else if (validation.phone) {
          Alert.alert(null, en.validation.phoneNumberMustBe10DigitsAtLeast, [
            {text: en.ok},
          ]);
        } else {
          setLoading(true);
          await dispatch(profileUpdate(updatedInfo));
          await dispatch(getProfile());
          setLoading(false);
          setEditing(false);
        }
      } else {
        setEditing(true);
      }
    } catch (error) {
      console.log('error from onEdit function', error);
      Alert.alert(null, en.somethingWentWrongPleaseTryAgainLater, [
        {text: en.ok},
      ]);
      setLoading(false);
    }
  };
  // const onPresss = async () => {
  //   if (validation.name) {
  //     Alert.alert(null, en.validation.pleaseEnterAValidName, [{text: en.ok}]);
  //   } else if (validation.phone) {
  //     Alert.alert(null, en.validation.phoneNumberMustBe10DigitsAtLeast, [
  //       {text: en.ok},
  //     ]);
  //   } else {
  //     setLoading(true);
  //     await dispatch(profileUpdate(updatedInfo));
  //     setLoading(false);
  //     setEditing(false);
  //   }
  // };

  console.log('profile info => ', profileInfo);

  return (
    <Container>
      <ScrollView>
        <View style={{backgroundColor: colors.bg, height: 60}} />
        <View style={styles.profileImageContainer}>
          <Image
            source={images.profile2}
            resizeMode="contain"
            style={styles.profileImageStyle}
          />
          {/* <TouchableOpacity
            style={styles.photoBtn}
            activeOpacity={1}
            onPress={() => alert('Take photo')}>
            <View style={styles.photoBtnInner}>
              <Icon name={'camera'} size={18} color={colors.white} />
            </View>
          </TouchableOpacity> */}
        </View>
        <View>
          <Input
            value={name}
            containerStyle={[
              styles.inputContainer,
              editing && styles.inputContainerEditing,
            ]}
            onChangeText={val => setName(val)}
            placeholder={'Name'}
            editable={editing}
            separateName
          />
          <Input
            value={password}
            secureTextEntry
            containerStyle={styles.inputContainer}
            onChangeText={val => setPassword(val)}
            placeholder={'Password'}
            editable={false}
            separateName
            actionButton={!editing && 'Change Password'}
            onActionPress={() => navigation.navigate('PasswordChange')}
          />
          <Input
            value={phone}
            containerStyle={[
              styles.inputContainer,
              editing && styles.inputContainerEditing,
            ]}
            onChangeText={val => setPhone(val)}
            placeholder={'Phone number'}
            keyboardType="phone-pad"
            editable={editing}
            separateName
          />
          {editing && (
            <Button
              style={editing ? styles.btnOnEdit : styles.btn}
              textStyle={styles.btnTxt}
              disabled={loading}
              onPress={() => setEditing(false)}
              text={en.cancel}
            />
          )}
          <Button
            style={editing ? styles.editBtnOnEdit : styles.editBTn}
            loading={loading}
            disabled={!editing && signoutloading}
            onPress={onEditPress}
            text={editing ? en.update : en.edit}
          />
          {!editing && (
            <Button
              style={styles.btn}
              textStyle={styles.btnTxt}
              loading={signoutloading}
              onPress={signOut}
              text={en.logout}
              loaderColor={colors.primary}
            />
          )}
        </View>
      </ScrollView>
    </Container>
  );
};
