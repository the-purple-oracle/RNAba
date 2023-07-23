import store from '../../redux/store';

export const getUserInfo = () => {
  const state = store.getState();
  return state.user; // "user" should match the key of the user reducer in your Redux store
};

export const formatDate = dateString => {
  const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};
