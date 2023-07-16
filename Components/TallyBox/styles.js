import {StyleSheet, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  outer: {
    marginTop: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: width / 3,
    height: width / 3,
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    width: width / 3,
    alignSelf: 'center',
    bottom: 0,
  },
  titleContainer: {
    marginTop: verticalScale(10),
    width: width / 3,
  },
});

export default styles;
