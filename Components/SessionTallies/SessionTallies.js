import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './styles';
const SessionTallies = ({session}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Session Tallies:</Text>
      <View style={styles.tallyContainer}>
        <FlatList
          data={Object.entries(session.tallies)}
          renderItem={({item}) => (
            <Text style={styles.item}>
              {item[0]}: {item[1]}
            </Text>
          )}
          keyExtractor={item => item[0]}
        />
      </View>
    </SafeAreaView>
  );
};
export default SessionTallies;
