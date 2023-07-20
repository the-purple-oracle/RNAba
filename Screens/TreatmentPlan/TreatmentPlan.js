import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, ScrollView} from 'react-native';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import PdfView from '../../Components/PdfView/PdfView';
import styles from './styles';

const TreatmentPlan = props => {
  const client = props.route.params;
  const [source, setSource] = useState([]);
  const [baseStr, setBaseStr] = useState(client.pdf);

  return (
    <View style={styles.treatmentPlanContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Treatment plan</Text>
      </View>
      <View style={styles.backBtn}>
        <GoBackBtn />
      </View>
      <PdfView baseStr={baseStr} />
    </View>
  );
};

export default TreatmentPlan;
