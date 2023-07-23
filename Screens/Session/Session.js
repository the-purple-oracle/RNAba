import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {editSession} from '../../api/clients';
import {saveSession} from '../../api/sessions';
import {useNavigation} from '@react-navigation/native';
import TallyBox from '../../Components/TallyBox/TallyBox';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import StyledButton from '../../Components/StyledButton';
import styles from './style';

const Session = props => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const client = props.route.params;
  let behaviors = client.behaviors;
  const [tallies, setTallies] = useState();

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
    saveSession(tallies, client._id, user, navigation, dispatch);
  };
  const getTally = (name, count) => {
    let newTallies = tallies;
    newTallies[name] = count;
    setTallies(newTallies);
  };

  return (
    <View style={styles.sessionContainer}>
      <View style={styles.goBackBtn}>
        <GoBackBtn />
      </View>
      <View style={styles.saveBtnContainer}>
        <StyledButton
          secondary
          medium
          onPress={() => {
            getAllTallies();
          }}>
          <Text style={styles.saveBtnText}>Save Session</Text>
        </StyledButton>
      </View>

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

export default Session;
