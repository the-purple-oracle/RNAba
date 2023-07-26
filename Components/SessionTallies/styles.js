import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: verticalScale(16),
  },
  tallyContainer: {
    flex: 1,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default styles;
