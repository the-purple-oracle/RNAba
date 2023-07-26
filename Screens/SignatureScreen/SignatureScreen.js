import React, {useState, useRef} from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import Signature from 'react-native-signature-canvas';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import Picker from '../../Components/Picker/Picker';
import styles from './styles';

const SignatureScreen = ({text, onOk}) => {
  const ref = useRef();
  const [value, setValue] = useState('');
  const handleSignature = signature => {
    console.log(signature);
    // Here you could store the signature data in the user's session.
    // Note that the 'signature' returned is a base64 encoded PNG image.
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
