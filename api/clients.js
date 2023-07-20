import Toast from 'react-native-toast-message';
import baseURL from '../assets/common/baseURL';
import axios from 'axios';
import {resetClients, setClients} from '../redux/reducers/Clients';

//Get list of clients for a user
export const getClientList = (userId, token, dispatch) => {
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  axios
    .get(`${baseURL}clients/users/${userId}`, config)
    .then(res => {
      dispatch(setClients(res.data));
    })
    .catch(error => console.log(error));
};

//delete a client
export const deleteClient = (userId, token, navigation) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .delete(`${baseURL}clients/${userId}`, config)
    .then(res => {
      Toast.show({
        topOffset: 60,
        type: 'success',
        text1: 'Client was successfully deleted',
        text2: '',
      });
      // setTimeout(() => {
      //   navigation.navigate('Clients');
      // }, 500);
    })
    .catch(error => console.log(error));
};

//clear clients when signing out
export const clearClients = dispatch => {
  dispatch(resetClients());
};

//add new client
export const addClient = (newClient, token, navigation) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .post(`${baseURL}clients`, newClient, config)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'New client successfully added',
          text2: '',
        });

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

export const editClient = (editedClient, clientId, token, navigation) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .put(`${baseURL}clients/${clientId}`, editedClient, config)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'New client successfully updated',
          text2: '',
        });

        setTimeout(() => {
          navigation.navigate('Clients');
        }, 500);
      }
    })
    .catch(error => {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again',
      });
    });
};

export const editSession = (sessions, clientId, token, navigation) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = {sessions: sessions};

  axios
    .put(`${baseURL}clients/sessions/${clientId}`, data, config)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'New client successfully updated',
          text2: '',
        });

        setTimeout(() => {
          navigation.navigate('Clients');
        }, 500);
      }
    })
    .catch(error => {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again',
      });
    });
};
