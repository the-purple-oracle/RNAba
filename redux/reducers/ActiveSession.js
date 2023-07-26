import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   activeSession: null,
//   isSessionActive: false,
//   timerData: {
//     intervals: [],
//     startTime: null,
//     currentTime: new Date(),
//     isRunning: false,
//   },
// };

const initialState = {
  activeSession: null,
  signatures: [],
  isSessionActive: false,
  timerData: {
    intervals: [],
    startTime: null,
    currentTime: new Date(),
    isRunning: false,
  },
};

const ActiveSession = createSlice({
  name: 'activeSession',
  initialState: initialState,
  reducers: {
    startSession: (state, action) => {
      return {
        ...state,
        activeSession: action.payload,
        signatures: [],
        isSessionActive: true,
      };
    },
    stopSession: state => {
      return initialState;
    },
    addSignature: (state, action) => {
      if (state.isSessionActive) {
        state.signatures.push({
          signature: action.payload.signature,
          pickerValue: action.payload.pickerValue,
        });
      }
    },
    clearSignatures: state => {
      if (state.isSessionActive) {
        state.activeSession.signatures = [];
      }
    },
    updateTallies: (state, action) => {
      if (state.isSessionActive) {
        state.activeSession.tallies = action.payload;
      }
    },
    updateIntervals: (state, action) => {
      if (state.isSessionActive) {
        state.activeSession.intervals = action.payload;
      }
    },
    startTimer: state => {
      if (state.isSessionActive) {
        state.timerData.isRunning = true;
        state.timerData.startTime = new Date();
      }
    },
    stopTimer: state => {
      if (state.isSessionActive) {
        state.timerData.isRunning = false;
        state.timerData.startTime = null;
      }
    },
    updateCurrentTime: (state, action) => {
      if (state.isSessionActive) {
        state.timerData.currentTime = action.payload;
      }
    },
    setTimerData: (state, action) => {
      if (state.isSessionActive) {
        // Replace the timer data with the new data
        state.timerData = action.payload;
      }
    },
    clearTimerData: state => {
      if (state.isSessionActive) {
        state.timerData = null;
      }
    },
  },
});

export const {
  startSession,
  stopSession,
  updateTallies,
  updateIntervals,
  startTimer,
  stopTimer,
  updateCurrentTime,
  setTimerData,
  clearTimerData,
  addSignature,
  clearSignatures,
} = ActiveSession.actions;
export default ActiveSession.reducer;
