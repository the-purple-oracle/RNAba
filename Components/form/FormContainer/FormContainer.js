import React from 'react';
import {ScrollView, Dimensions, Text} from 'react-native';
import styles from './styles';

const FormContainer = props => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
};

export default FormContainer;
