import {StyleSheet, Dimensions} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  treatmentPlanContainer: {
    height: '100%',
    width: '100%',
  },
  header: {
    marginTop: verticalScale(24),
    alignItems: 'center',
  },
  headerText: {
    fontSize: scaleFontSize(30),
  },
  backBtn: {
    position: 'absolute',
    top: verticalScale(24),
    marginLeft: horizontalScale(24),
  },
});

export default styles;
