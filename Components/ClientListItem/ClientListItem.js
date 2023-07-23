import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getClientSessions} from '../../api/sessions';
import styles from './styles';

const ClientListItem = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={async () => {
        await getClientSessions(props.client.id, dispatch);
        navigation.navigate('Client', props.client);
      }}>
      <Text style={styles.txt}>{props.client.name}</Text>
    </TouchableOpacity>
  );
};

export default ClientListItem;
