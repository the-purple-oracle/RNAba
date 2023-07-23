import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {formatDate} from '../../assets/helpers/helpers';
import {useNavigation} from '@react-navigation/native';

const SessionListItem = props => {
  const navigation = useNavigation();
  const [date, setDate] = useState(formatDate(props.session.dateCreated));
  return (
    <TouchableOpacity
      style={styles.sessionListItemContainer}
      onPress={() =>
        navigation.navigate('SessionDetails', {
          session: props.session,
          client: props.client,
        })
      }>
      <View style={styles.listItem}>
        <Text>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SessionListItem;
