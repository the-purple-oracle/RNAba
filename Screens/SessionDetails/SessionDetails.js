import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, ScrollView} from 'react-native';
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
  const formatTime = date => {
    return new Date(date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };
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
      <Text style={styles.header}>Session Intervals:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pastIntervals}>
        {session.intervals.map((interval, index) => (
          <View key={index} style={styles.interval}>
            <Text>Interval {index + 1}</Text>
            <Text>Start: {formatTime(interval.startTime)}</Text>
            <Text>End: {formatTime(interval.endTime)}</Text>
          </View>
        ))}
      </ScrollView>
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
