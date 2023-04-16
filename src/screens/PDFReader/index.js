import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import Container from '../../components/Container';

export default ({route}) => {
  const {url} = route.params;
  const source = {
    uri: url,
    cache: false,
  };

  return (
    <Container style={styles.container}>
      <Pdf trustAllCerts={false} source={source} style={styles.pdf} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: null,
    marginVertical: 3,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
