import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
  startSessionBtn: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    margin: 24,
  },
  saveBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // sessionContainer: {
  //   marginTop: verticalScale(24),
  // },
  goBackBtn: {
    position: 'absolute',
    left: horizontalScale(14),
    top: verticalScale(14),
    zIndex: 10,
  },

  btnText: {
    color: 'white',
    alignSelf: 'center',
  },
  // flatListStyles: {
  //   height: '80%',
  //   // alignItems: 'center',
  //   marginTop: verticalScale(20),
  //   alignItems: 'flex-start',
  // },
  // behaviorContainer: {
  //   height: '80%',
  //   alignItems: 'center',
  //   margin: 10,
  // },
});

export default styles;

// const styles = StyleSheet.create({
//   sessionContainer: {
//     marginTop: verticalScale(24),
//   },
//   goBackBtn: {
//     position: 'absolute',
//     left: horizontalScale(14),
//     top: verticalScale(14),
//     zIndex: 10,
//   },
//   saveBtnContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   saveBtnText: {
//     color: 'white',
//     alignSelf: 'center',
//   },
//   flatListStyles: {
//     height: '80%',
//     // alignItems: 'center',
//     marginTop: verticalScale(20),
//     alignItems: 'flex-start',
//   },
//   behaviorContainer: {
//     height: '80%',
//     alignItems: 'center',
//     margin: 10,
//   },
// });
