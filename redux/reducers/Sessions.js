import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sessions: [],
  timerData: null,
};

const Sessions = createSlice({
  name: 'sessions',
  initialState: initialState,
  reducers: {
    resetSessions: () => {
      return initialState;
    },
    setSessions: (state, action) => {
      return {
        ...state,
        sessions: action.payload,
      };
    },
    // setTimerData: (state, action) => {
    //   return {
    //     ...state,
    //     timerData: action.payload,
    //   };
    // },
  },
});

export const {resetSessions, setSessions, setTimerData} = Sessions.actions;
export default Sessions.reducer;
