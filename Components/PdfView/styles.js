import {StyleSheet, Dimensions} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  pdfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(16),
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default styles;
