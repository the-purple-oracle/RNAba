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
    addSession: (state, action) => {
      return {
        ...state,
        sessions: [...state.sessions, action.payload],
      };
    },
  },
});

export const {resetSessions, addSession} = Sessions.actions;
export default Sessions.reducer;
