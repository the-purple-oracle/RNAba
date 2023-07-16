import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  labelText: {
    fontSize: 20,
    paddingRight: 10,
  },
  input: {
    width: '80%',
    height: 60,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
  },
  behaviorInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  behaviorsTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesInput: {
    width: '80%',
    height: 150,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    paddingTop: 10,
    borderWidth: 2,
    borderColor: 'orange',
  },
});

export default styles;
