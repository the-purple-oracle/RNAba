import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../Components/Header/Header';
import {getUserProfile, logoutUser} from '../../api/user';
import styles from './styles';
import {clearClients} from '../../api/clients';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let {userId} = user.user;
    getUserProfile(userId, dispatch);
  }, [user.user, dispatch]);

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigation.navigate('Login');
    }
  }, [user.isLoggedIn, navigation]);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          {user.userProfile && (
            <Header title={'Welcome ' + user.userProfile.name} />
          )}
        </View>
        <Button
          title={'Clients'}
          onPress={() => navigation.navigate('Clients')}
        />
        <Button
          title={'Log Out'}
          onPress={() => {
            clearClients(dispatch);
            logoutUser(dispatch);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
