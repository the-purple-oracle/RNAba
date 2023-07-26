import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  goBackBtn: {
    position: 'absolute',
    top: verticalScale(24),
    left: 20,
  },
  sessionDetailContainer: {
    flex: 1,
    alignItems: 'center',
    // marginHorizontal: horizontalScale(24),
  },
  clientNameContainer: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  clientName: {
    fontSize: scaleFontSize(24),
    fontWeight: 'bold',
  },
  sessionDate: {
    fontSize: scaleFontSize(20),
    marginBottom: 15,
  },
  resultsContainer: {
    padding: 16,
  },
  signatureHeader: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
  },
  signaturesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
  },
  signature: {
    marginHorizontal: horizontalScale(10),
  },
  header: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    marginVertical: verticalScale(16),
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
  interval: {
    padding: 10,
  },
});

export default styles;
