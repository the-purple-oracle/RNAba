import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './styles';
const SessionSignatures = ({session}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signatureHeader}>Signatures</Text>
      <View style={styles.signaturesContainer}>
        {session.signatures && session.signatures[0] && (
          <View style={styles.signature}>
            <Text style={styles.pickerValue}>
              {session.signatures[0].pickerValue}
            </Text>
            <Image
              style={styles.signatureImage}
              source={{uri: session.signatures[0].signature}}
            />
          </View>
        )}
        {session.signatures && session.signatures[1] && (
          <View style={styles.signature}>
            <Text style={styles.pickerValue}>
              {session.signatures[1].pickerValue}
            </Text>
            <Image
              style={styles.signatureImage}
              source={{uri: session.signatures[1].signature}}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default SessionSignatures;
