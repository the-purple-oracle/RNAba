import {StyleSheet, Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
  },
});

export default styles;
