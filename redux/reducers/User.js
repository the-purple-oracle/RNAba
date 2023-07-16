import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: '',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        ...{isLoggedIn: true},
        user: action.payload,
      };
    },
    setUserProfile: (state, action) => {
      return {...state, userProfile: action.payload};
    },
    logOutUser: () => {
      return initialState;
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {
  logIn,
  setUserProfile,
  resetToInitialState,
  updateToken,
  logOutUser,
} = User.actions;
export default User.reducer;
