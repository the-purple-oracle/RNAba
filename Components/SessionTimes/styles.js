import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  },
  interval: {
    width: '80%',
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Set your desired border color
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
