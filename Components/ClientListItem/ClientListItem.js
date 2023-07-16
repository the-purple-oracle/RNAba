import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
const ClientListItem = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Client', props.client)}>
      <Text style={styles.txt}>{props.client.name}</Text>
    </TouchableOpacity>
  );
};

export default ClientListItem;
