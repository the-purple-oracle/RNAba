import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(24),
  },
  txt: {
    fontSize: 20,
    marginLeft: 100,
    padding: 10,
  },
});

export default styles;
