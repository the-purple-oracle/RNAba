import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import StyledButton from '../StyledButton';
import {deleteSession} from '../../api/sessions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import styles from './styles';
const SessionTimes = ({session, client}) => {
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Session Intervals:</Text>
      <View>
        {session.intervals.map((interval, index) => (
          <View key={index} style={styles.interval}>
            <Text>Interval {index + 1}</Text>
            <Text>Start: {formatTime(interval.startTime)}</Text>
            <Text>End: {formatTime(interval.endTime)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.btnContainer}>
        <StyledButton
          secondary
          large
          onPress={() =>
            deleteSession(session.id, client.id, navigation, dispatch)
          }>
          <Text style={styles.btnText}>Delete Session</Text>
        </StyledButton>
      </View>
    </SafeAreaView>
  );
};

{
  /* <ScrollView
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
      </ScrollView> */
}
export default SessionTimes;
