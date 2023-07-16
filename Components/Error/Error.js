import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Error = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

export default Error;
