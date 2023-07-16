import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  clients: [],
};

const Clients = createSlice({
  name: 'clients',
  initialState: initialState,
  reducers: {
    resetClients: () => {
      console.log('resetting clients');
      return initialState;
    },
    setClients: (state, action) => {
      return {
        ...state,
        clients: action.payload,
      };
    },
    addClient: (state, action) => {
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    },
  },
});

export const {resetClients, setClients, addClient} = Clients.actions;
export default Clients.reducer;
