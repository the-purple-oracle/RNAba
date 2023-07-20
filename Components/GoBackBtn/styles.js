import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(30),
    height: horizontalScale(30),
    // backgroundColor: 'gainsboro',
    borderRadius: 50,
  },
});

export default styles;
