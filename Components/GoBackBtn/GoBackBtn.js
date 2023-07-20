import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
const GoBackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.btnContainer}>
      <FontAwesomeIcon icon={faChevronLeft} size={22} />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
