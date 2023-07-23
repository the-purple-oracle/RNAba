import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  goBackBtn: {
    position: 'absolute',
    top: verticalScale(24),
    left: 20,
  },
  sessionDetailContainer: {
    flex: 1,
    alignItems: 'center',
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
  },
  resultsContainer: {
    padding: 16,
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
});

export default styles;
