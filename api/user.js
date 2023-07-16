import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import baseURL from '../assets/common/baseURL';
import axios from 'axios';
import {
  logIn,
  setUserProfile,
  logOutUser,
  updateToken,
} from '../redux/reducers/User';

export const loginUser = (user, dispatch) => {
  fetch(`${baseURL}users/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        const token = data.token;
        dispatch(updateToken(token));
        AsyncStorage.setItem('jwt', token);
        const decoded = jwt_decode(token);
        dispatch(logIn(decoded, user, token));
      } else {
        logoutUser(dispatch);
      }
    })
    .catch(err => {
      console.log('in error');
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please provide correct credentials',
        text2: '',
      });
      logoutUser(dispatch);
    });
};

export const registerUser = (user, dispatch) => {
  axios
    .post(`${baseURL}users/register`, user)
    .then(res => {
      if (res.status === 200) {
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'Registration Complete',
          text2: 'Please login to your account',
        });
        setTimeout(() => {
          const {email, password} = user;
          loginUser({email, password}, dispatch);
        }, 500);
      }
    })
    .catch(err => {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again',
      });
    });
};

export const getUserProfile = (id, dispatch) => {
  AsyncStorage.getItem('jwt')
    .then(res => {
      axios
        .get(`${baseURL}users/${id}`, {
          headers: {Authorization: `Bearer ${res}`},
        })
        .then(user => dispatch(setUserProfile(user.data)));
    })
    .catch(error => console.log(error));
};

export const logoutUser = dispatch => {
  AsyncStorage.removeItem('jwt');
  dispatch(logOutUser());
};
