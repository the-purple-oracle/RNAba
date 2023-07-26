import React, {useState, useRef} from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import Signature from 'react-native-signature-canvas';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import Picker from '../../Components/Picker/Picker';
import {useDispatch} from 'react-redux';
import {addSignature} from '../../redux/reducers/ActiveSession';
import Toast from 'react-native-toast-message';
import styles from './styles';

const SignatureScreen = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  const handleSignature = signature => {
    if (value === null) {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please select option before saving',
        text2: 'Please try again',
      });
    } else {
      console.log(value);
      Toast.show({
        topOffset: 60,
        type: 'success',
        text1: 'Signature added',
        text2: '',
      });
      dispatch(addSignature({signature, pickerValue: value}));
    }
  };
  const handleClear = () => {
    console.log('clearing text');
    ref.current.clearSignature();
  };
  const handleConfirm = () => {
    console.log('end');
    ref.current.readSignature();
  };
  const style = `
    .m-signature-pad {
      background-color: white;
      border: 1px solid #4f99b4;
    }
    .m-signature-pad--footer
    .button {
      background-color: lightblue;
      color: #FFF;
    }`;
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.container}> */}
      <View style={styles.goBackBtn}>
        <GoBackBtn />
      </View>
      {/* <View style={styles.container}> */}
      <View style={styles.picker}>
        <Picker value={value} setValue={setValue} />
      </View>
      <View style={styles.signatureContainer}>
        <Signature
          ref={ref}
          onOK={handleSignature}
          autoClear={true}
          descriptionText="Sign"
          clearText="Clear"
          confirmText="Save"
          webStyle={style}
        />
      </View>
      {/* </ScrollView> */}
    </View>

    // </View>
  );
};

export default SignatureScreen;
