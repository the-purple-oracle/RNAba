import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  registerContainer: {
    marginTop: verticalScale(80),
  },
  buttonGroup: {
    width: '80%',
    marginVertical: verticalScale(10),
    alignItems: 'center',
  },
  btnText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
