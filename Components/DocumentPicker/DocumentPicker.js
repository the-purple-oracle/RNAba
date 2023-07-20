import React, {useState} from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';
import StyledButton from '../StyledButton';
import DocumentPicker, {isCancel, types} from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import styles from './styles';

const DocumentPickerComponent = props => {
  const [result, setResult] = useState();
  const [baseStr, setBaseStr] = useState('');

  const pickAndConvertToBase64 = async () => {
    try {
      const document = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      //   const fileContent = await RNFS.readFile(document[0].uri, 'base64');
      //save base64 string in state
      setBaseStr(await RNFS.readFile(document[0].uri, 'base64'));
      //set the base64 string to pass to pdf view component
      props.setPdfBase(await RNFS.readFile(document[0].uri, 'base64'));
      setResult(
        'data:application/pdf;base64,' +
          (await RNFS.readFile(document[0].uri, 'base64')),
      );
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('Document picker cancelled.');
      } else {
        console.log('Error picking document ', error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <StyledButton secondary medium onPress={pickAndConvertToBase64}>
        <Text style={styles.btnText}>Pick Pdf</Text>
      </StyledButton>
    </View>
  );
};

export default DocumentPickerComponent;
