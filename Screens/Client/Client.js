import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import TallyBox from '../../Components/TallyBox/TallyBox';
import StyledButton from '../../Components/StyledButton';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import {deleteClient, editSession} from '../../api/clients';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import {faClose, faGear} from '@fortawesome/free-solid-svg-icons';

const Client = props => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const client = props.route.params;
  let behaviors = client.behaviors;
  const [tallies, setTallies] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [sessions, setSessions] = useState(client.sessions);
  useEffect(() => {
    setUpTallies();
    return () => {
      setTallies();
    };
  }, []);

  const setUpTallies = () => {
    let t = {};
    for (let i = 0; i < behaviors.length; i++) {
      t[behaviors[i]] = 0;
    }
    setTallies(t);
  };
  const getAllTallies = () => {
    let newSession = tallies;
    setSessions(prevArray => [...prevArray, newSession]);
    const data = [...sessions, newSession];

    editSession(data, client._id, user.token, navigation);
    // editSession(newSession, client._id, user.token, navigation);
    // console.log(newSession);
  };

  const getTally = (name, count) => {
    let newTallies = tallies;
    newTallies[name] = count;
    // console.log(newTallies);
    setTallies(newTallies);
  };

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

      <View style={styles.backBtn}>
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
      <Button title={'get tallies'} onPress={() => getAllTallies()} />
      <View style={styles.behaviorContainer}>
        <FlatList
          data={client.behaviors}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({item}) => <TallyBox title={item} getTally={getTally} />}
          contentContainerStyle={[styles.flatListStyles]}
        />
      </View>
    </View>
  );
};
export default Client;
