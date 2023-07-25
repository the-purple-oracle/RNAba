import Toast from 'react-native-toast-message';
import baseURL from '../assets/common/baseURL';
import axios from 'axios';
import {setSessions} from '../redux/reducers/Sessions';
import {getUserInfo} from '../assets/helpers/helpers';

export const saveSession = (
  tallies,
  intervals,
  clientId,
  user,
  navigation,
  dispatch,
) => {
  let token = user.token;
  let userId = user.userProfile.id;

  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  const data = {
    tallies,
    intervals: intervals.intervals,
    clientId,
    userId,
  };
  axios
    .post(`${baseURL}sessions`, data, config)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'New session successfully added',
          text2: '',
        });
        getClientSessions(clientId, dispatch);
        setTimeout(() => {
          navigation.navigate('Clients');
        }, 500);
      }
    })
    .catch(error => {
      console.log(error);
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again',
      });
    });
};

export const deleteSession = (sessionId, clientId, navigation, dispatch) => {
  const user = getUserInfo();

  const config = {
    headers: {Authorization: `Bearer ${user.token}`},
  };
  axios
    .delete(`${baseURL}sessions/${sessionId}/client/${clientId}`, config)
    .then(res => {
      Toast.show({
        topOffset: 60,
        type: 'success',
        text1: 'Session was successfully deleted',
        text2: '',
      });
      //update the clients sessions after deleting
      getClientSessions(clientId, dispatch);
      setTimeout(() => {
        navigation.navigate('Clients');
      }, 500);
    })
    .catch(error => console.log(error));
};

export const getClientSessions = async (clientId, dispatch) => {
  const user = getUserInfo();
  const config = {
    headers: {Authorization: `Bearer ${user.token}`},
  };
  try {
    let res = await axios.get(`${baseURL}sessions/client/${clientId}`, config);
    dispatch(setSessions(res.data));
  } catch (error) {
    console.log(error);
  }
};
