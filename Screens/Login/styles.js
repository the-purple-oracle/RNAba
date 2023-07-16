import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: verticalScale(80),
  },
  buttonGroup: {
    width: '80%',
    alignItems: 'center',
  },
  middleText: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  btnText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
