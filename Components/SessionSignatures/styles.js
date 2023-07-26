import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  signatureHeader: {
    fontSize: scaleFontSize(30),
    marginTop: verticalScale(18),
  },
  signatureImage: {
    width: 150,
    height: 150,
  },
  signaturesContainer: {},
  signature: {
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
});

export default styles;
