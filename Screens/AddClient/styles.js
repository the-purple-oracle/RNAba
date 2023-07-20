import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  goBackBtn: {
    position: 'absolute',
    top: verticalScale(24),
    left: horizontalScale(12),
    elevation: 10,
    zIndex: 10,
  },
  container: {
    marginTop: verticalScale(24),
  },
  labelText: {
    fontSize: scaleFontSize(24),
    paddingRight: horizontalScale(10),
  },
  input: {
    width: '80%',
    height: verticalScale(60),
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
  },
  behaviorInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: horizontalScale(20),
  },
  behaviorsTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesInput: {
    width: '80%',
    height: verticalScale(150),
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    paddingTop: 10,
    borderWidth: 2,
    borderColor: 'orange',
  },
  pickerContainer: {
    marginVertical: verticalScale(10),
  },
  picker: {
    marginTop: verticalScale(10),
  },
});

export default styles;
