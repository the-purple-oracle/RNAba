import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    margin: verticalScale(10),
  },
  text: {
    color: 'red',
  },
});

export default styles;
