import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sessions: [],
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
  },
});

export const {resetSessions, setSessions} = Sessions.actions;
export default Sessions.reducer;
