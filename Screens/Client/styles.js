import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  goBackBtn: {
    position: 'absolute',
    top: verticalScale(34),
    marginLeft: horizontalScale(24),
  },
  clientHeader: {
    alignItems: 'center',
    marginTop: verticalScale(24),
  },
  headerText: {
    fontSize: scaleFontSize(30),
  },
  behaviorContainer: {
    height: '80%',
    alignItems: 'center',
    margin: 10,
  },
  flatListStyles: {
    height: '80%',
    // alignItems: 'center',
    marginTop: verticalScale(20),
    alignItems: 'flex-start',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(22),
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  gear: {
    position: 'absolute',
    right: horizontalScale(20),
    top: verticalScale(20),
  },

  treatmentPlanBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  sessionList: {
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  sessionButton: {
    alignItems: 'center',
  },
});

export default styles;
