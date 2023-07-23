import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import StyledButton from '../../Components/StyledButton';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './style';
import {formatDate} from '../../assets/helpers/helpers';
import {deleteSession} from '../../api/sessions';

const SessionDetails = props => {
  const {session, client} = props.route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.sessionDetailContainer}>
      <View style={styles.goBackBtn}>
        <GoBackBtn />
      </View>

      <View style={styles.clientNameContainer}>
        <Text style={styles.clientName}>{client.name}</Text>
      </View>
      <Text style={styles.sessionDate}>
        Session date: {formatDate(session.dateCreated)}
      </Text>

      <Text style={styles.header}>Session Tallies:</Text>
      <FlatList
        data={Object.entries(session.tallies)}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item[0]}: {item[1]}
          </Text>
        )}
        keyExtractor={item => item[0]}
      />

      <StyledButton
        secondary
        large
        onPress={() =>
          deleteSession(session.id, client.id, navigation, dispatch)
        }>
        <Text>Delete Session</Text>
      </StyledButton>
    </SafeAreaView>
  );
};

export default SessionDetails;
