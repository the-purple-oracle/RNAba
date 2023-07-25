import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {editSession} from '../../api/clients';
import {saveSession} from '../../api/sessions';
import {useNavigation} from '@react-navigation/native';
import TallyBox from '../../Components/TallyBox/TallyBox';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import StyledButton from '../../Components/StyledButton';
import SessionTimer from '../../Components/SessionTimer/SessionTimer';
import styles from './style';
import {
  startSession,
  stopSession,
  updateTallies,
  updateIntervals,
} from '../../redux/reducers/ActiveSession';

const Session = props => {
  const user = useSelector(state => state.user);
  const activeSession = useSelector(state => state.activeSession.activeSession);
  const isSessionActive = useSelector(
    state => state.activeSession.isSessionActive,
  );
  // const timerData = useSelector(state => state.sessions.timerData);
  const timerData = useSelector(state => state.activeSession.timerData);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const client = props.route.params;
  let behaviors = client.behaviors;
  const [tallies, setTallies] = useState({});
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    if (!isSessionActive) {
      setUpTallies();
      return () => {
        setTallies({});
      };
    }
  }, []);

  useEffect(() => {
    // If there is an active session, update the tallies state with the active session's data
    if (isSessionActive && activeSession) {
      setTallies(activeSession.tallies);
    }
  }, [isSessionActive, activeSession]);

  const setUpTallies = () => {
    let t = {};
    for (let i = 0; i < behaviors.length; i++) {
      t[behaviors[i]] = 0;
    }
    setTallies(t);
  };

  const getAllTallies = () => {
    let intervals = timerData;

    saveSession(tallies, intervals, client._id, user, navigation, dispatch);
    // After saving the session, stop the active session
    dispatch(stopSession());
  };

  const getTally = (name, count) => {
    let newTallies = {...tallies}; // Make a copy of the tallies object
    newTallies[name] = count;
    setTallies(newTallies);

    // Update the tallies in the activeSessionSlice when the tally is changed
    dispatch(updateTallies(newTallies));
  };

  useEffect(() => {
    // Update the intervals in the activeSessionSlice when the timerData changes
    if (isSessionActive && timerData) {
      dispatch(updateIntervals(timerData));
    }
  }, [isSessionActive, timerData, dispatch]);

  const handleStartSession = () => {
    // Start the session by dispatching the startSession action with the tallies data
    dispatch(startSession({tallies: tallies, intervals: timerData}));
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isSessionActive ? (
        <>
          <View style={styles.goBackBtn}>
            <GoBackBtn />
          </View>
          <View style={styles.startSessionBtn}>
            <StyledButton secondary medium onPress={handleStartSession}>
              <Text style={styles.btnText}>Start Session</Text>
            </StyledButton>
          </View>
        </>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View style={styles.goBackBtn}>
                <GoBackBtn />
              </View>
              <View style={styles.saveBtnContainer}>
                {isSessionActive && (
                  <StyledButton secondary medium onPress={getAllTallies}>
                    <Text style={styles.btnText}>Save Session</Text>
                  </StyledButton>
                )}
              </View>
              {isSessionActive && <SessionTimer />}
            </>
          }
          data={client.behaviors}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({item}) => (
            <TallyBox
              title={item}
              count={tallies[item]} // Pass the count from the tallies state to the TallyBox
              updateTally={getTally} // Pass the updateTally function to the TallyBox
            />
          )}
          contentContainerStyle={[styles.flatListStyles]}
        />
      )}
    </SafeAreaView>
  );
};

//mega flatlist version
// return (
//   <SafeAreaView style={styles.container}>
//     <FlatList
//       showsVerticalScrollIndicator={false}
//       ListHeaderComponent={
//         <>
//           <View style={styles.goBackBtn}>
//             <GoBackBtn />
//           </View>
//           <View style={styles.saveBtnContainer}>
//             {!isSessionActive && (
//               <StyledButton secondary medium onPress={handleStartSession}>
//                 <Text style={styles.btnText}>Start Session</Text>
//               </StyledButton>
//             )}
//             {isSessionActive && (
//               <StyledButton secondary medium onPress={getAllTallies}>
//                 <Text style={styles.btnText}>Save Session</Text>
//               </StyledButton>
//             )}
//           </View>
//           {isSessionActive && <SessionTimer />}
//         </>
//       }
//       data={client.behaviors}
//       numColumns={2}
//       columnWrapperStyle={{
//         justifyContent: 'space-between',
//       }}
//       renderItem={({item}) => (
//         <TallyBox
//           title={item}
//           count={tallies[item]} // Pass the count from the tallies state to the TallyBox
//           updateTally={getTally} // Pass the updateTally function to the TallyBox
//         />
//       )}
//       contentContainerStyle={[styles.flatListStyles]}
//     />
//   </SafeAreaView>
// );

// ScrollView virtualization issue version
// return (
//   <ScrollView>
//     <View style={styles.sessionContainer}>
//       <View style={styles.goBackBtn}>
//         <GoBackBtn />
//       </View>
//       <View style={styles.saveBtnContainer}>
//         {!isSessionActive && (
//           <StyledButton secondary medium onPress={handleStartSession}>
//             <Text style={styles.saveBtnText}>Start Session</Text>
//           </StyledButton>
//         )}
//         {isSessionActive && (
//           <StyledButton secondary medium onPress={getAllTallies}>
//             <Text style={styles.saveBtnText}>Save Session</Text>
//           </StyledButton>
//         )}
//       </View>
//       {isSessionActive && <SessionTimer />}
//       <View style={styles.behaviorContainer}>
//         <FlatList
//           data={client.behaviors}
//           numColumns={2}
//           columnWrapperStyle={{
//             justifyContent: 'space-between',
//           }}
//           renderItem={({item}) => (
//             <TallyBox
//               title={item}
//               count={tallies[item]} // Pass the count from the tallies state to the TallyBox
//               updateTally={getTally} // Pass the updateTally function to the TallyBox
//             />
//           )}
//           contentContainerStyle={[styles.flatListStyles]}
//         />
//       </View>
//     </View>
//   </ScrollView>
// );

export default Session;
