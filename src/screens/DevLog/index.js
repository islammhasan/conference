import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

export default DevLog = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: CopyComponent,
    });
  }, [navigation]);

  const text = `${JSON.stringify(route?.params?.attr)}`;

  const CopyComponent = () => {
    const copy = () => {
      if (text) {
        Clipboard.setString(text);
        alert('Copied!');
      } else {
        alert('Nothing to copy');
      }
    };
    return (
      <TouchableOpacity
        onPress={copy}
        activeOpacity={0.7}
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          flex: 1,
        }}>
        <Text style={{color: '#000'}}>Copy</Text>
      </TouchableOpacity>
    );
  };

  console.log('text to render =>>', text);
  return (
    <ScrollView
      contentContainerStyle={{paddingVertical: 15, paddingHorizontal: 10}}>
      {/* <Text style={{color: '#00cc99'}}>DevLog</Text> */}
      <Text style={{color: '#000'}}>{text}</Text>
    </ScrollView>
  );
};
