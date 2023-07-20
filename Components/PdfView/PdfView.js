import React from 'react';
import {View, Text} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from './styles';

const PdfView = props => {
  // console.log(props.baseStr);
  return (
    <View style={styles.pdfContainer}>
      {props.baseStr && (
        <Pdf
          source={{uri: `data:application/pdf;base64,${props.baseStr}`}}
          fitWidth={true}
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
      )}
    </View>
  );
};

export default PdfView;
