import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import StyledButton from '../../Components/StyledButton';
import ClientListItem from '../../Components/ClientListItem/ClientListItem';

import {useFocusEffect} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getClientList} from '../../api/clients';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Clients = () => {
  const user = useSelector(state => state.user);
  const clients = useSelector(state => state.clients);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [token, setToken] = useState(user.token);

  useFocusEffect(
    useCallback(() => {
      if (token) {
        getClientList(user.user.userId, token, dispatch);
      }
    }, [navigation.isFocused(), token]),
  );

  const handleAddClient = () => {
    navigation.navigate('AddClient');
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.goBackBtn}>
          <GoBackBtn />
        </View>
        <Text style={styles.title}>Clients</Text>
      </View>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {clients.clients ? (
          clients.clients?.map(c => <ClientListItem key={c.id} client={c} />)
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
        <View style={styles.btnContainer}>
          <StyledButton secondary large onPress={() => handleAddClient()}>
            <Text style={styles.btnText}>Add Client</Text>
          </StyledButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Clients;
