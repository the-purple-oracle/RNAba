import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  clientHeader: {
    alignItems: 'center',
    paddingTop: verticalScale(20),
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
    right: 20,
    top: 20,
  },
});

export default styles;
