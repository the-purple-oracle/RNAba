import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: scaleFontSize(18),
    alignSelf: 'center',
  },
});
export default styles;
