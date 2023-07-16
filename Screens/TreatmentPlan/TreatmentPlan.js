import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';

import Pdf from 'react-native-pdf';
import styles from './styles';
const TreatmentPlan = () => {
  const [source, setSource] = useState([]);
  const [uri, setUri] = useState();

  const handleError = err => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  const getFile = async () => {
    try {
      const pdfs = await DocumentPicker.pick({
        type: types.pdf,
      });

      const result = await RNFetchBlob.fs.readFile(pdfs.uri, 'base64');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text>Pick Treatment Plan PDF</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Button title="pick pdf file" onPress={() => getFile()} />
      </View>
      <View style={styles.pdfContainer}>
        {/* {uri && (
          <Pdf
            source={uri}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        )} */}
      </View>
    </SafeAreaView>
  );
};

export default TreatmentPlan;
