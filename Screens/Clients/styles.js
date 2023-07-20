import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(24),
    marginBottom: verticalScale(12),
  },

  goBackBtn: {
    position: 'absolute',
    left: horizontalScale(24),
    flexDirection: 'row',
  },
  listContainer: {
    height: '100%',
    backgroundColor: 'gainsboro',
    position: 'relative',
  },
  title: {
    fontSize: scaleFontSize(34),
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: verticalScale(24),
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
