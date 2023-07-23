import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import TallyBox from '../../Components/TallyBox/TallyBox';
import StyledButton from '../../Components/StyledButton';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import {deleteClient, editSession} from '../../api/clients';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import {faClose, faGear} from '@fortawesome/free-solid-svg-icons';
import Session from '../Session/Session';
import {getClientSessions} from '../../api/sessions';
import {setSessions} from '../../redux/reducers/Sessions';
import SessionListItem from '../../Components/SessionListItem/SessionListItem';

const Client = props => {
  const user = useSelector(state => state.user);
  const sessions = useSelector(state => state.sessions);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const client = props.route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [sessionList, setSessionsList] = useState();

  useEffect(() => {
    // getClientSessions(client._id, dispatch);
    setSessionsList(sessions.sessions);
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              underlayColor="#E8E8E8"
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                alignSelf: 'flex-end',
                position: 'absolute',
                top: 5,
                right: 10,
              }}>
              <FontAwesomeIcon icon={faClose} size={20} />
            </TouchableOpacity>

            <StyledButton
              medium
              secondary
              onPress={() => [
                navigation.navigate('EditClient', client),
                setModalVisible(false),
              ]}>
              <Text style={styles.btnText}>Edit</Text>
            </StyledButton>
            <StyledButton
              medium
              danger
              onPress={() => [
                deleteClient(client._id, user.token, dispatch),
                setTimeout(() => {
                  navigation.navigate('Clients');
                }, 500),
                setModalVisible(false),
              ]}>
              <Text style={styles.btnText}>Delete</Text>
            </StyledButton>
          </View>
        </View>
      </Modal>

      <View style={styles.clientHeader}>
        <Text style={styles.headerText}>{client.name}</Text>
      </View>

      <View style={styles.gear}>
        <TouchableOpacity onPress={() => toggleModal()}>
          <FontAwesomeIcon icon={faGear} size={40} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.goBackBtn}>
        <GoBackBtn />
      </View>
      <View style={styles.treatmentPlanBtnContainer}>
        <StyledButton
          secondary
          large
          onPress={() => {
            navigation.navigate('TreatmentPlan', client);
          }}>
          <Text style={styles.btnText}>Treatment Plan</Text>
        </StyledButton>
      </View>
      <View style={styles.sessionList}>
        {sessionList ? (
          sessionList?.map(s => (
            <SessionListItem key={s.id} client={client} session={s} />
          ))
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
      </View>
      <Button
        title={'New session'}
        onPress={() => navigation.navigate('Session', client)}
      />
    </View>
  );
};
export default Client;
