import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  sessionTimerContainer: {
    alignItems: 'center',
    marginTop: verticalScale(24),
    marginHorizontal: horizontalScale(24),
  },
  currentIntervalContainer: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'gainsboro',
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
  },
  currentIntervalTimes: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  startStopBtns: {
    justifyContent: 'flex-end',
  },
  pastIntervals: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  interval: {
    padding: 10,
  },
});

export default styles;
