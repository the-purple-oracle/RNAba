import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  goBackBtn: {
    position: 'absolute',
    top: verticalScale(24),
    left: horizontalScale(20),
  },
  signatureContainer: {
    width: '80%',
    height: 350,
    marginTop: verticalScale(20),
    alignSelf: 'center',
  },
  picker: {
    zIndex: 10,
    marginBottom: verticalScale(14),
    marginTop: verticalScale(100),
    width: '80%',
    alignSelf: 'center',
  },
});

export default styles;
