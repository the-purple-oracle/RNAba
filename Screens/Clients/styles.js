import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  listContainer: {
    height: '100%',
    backgroundColor: 'gainsboro',
    position: 'relative',
  },
  title: {
    marginTop: verticalScale(50),
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: scaleFontSize(30),
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
  },
  btnContainer: {
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
