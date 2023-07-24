import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  sessionTimerContainer: {
    alignItems: 'center',
  },
  currentIntervalContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentIntervalTimes: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  startStopBtns: {
    justifyContent: 'flex-end',
  },
});

export default styles;
