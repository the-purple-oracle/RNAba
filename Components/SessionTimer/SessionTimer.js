import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {setTimerData} from '../../redux/reducers/Sessions';
import StyledButton from '../StyledButton';
import styles from './styles';
import {
  startTimer,
  stopTimer,
  setTimerData,
  updateCurrentTime,
} from '../../redux/reducers/ActiveSession';

const SessionTimer = () => {
  const dispatch = useDispatch();
  const timerData = useSelector(state => state.activeSession.timerData);

  useEffect(() => {
    let interval;
    if (timerData.isRunning) {
      interval = setInterval(() => {
        dispatch(updateCurrentTime(new Date()));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerData.isRunning, dispatch]);

  const handleStartSession = () => {
    if (!timerData.isRunning) {
      dispatch(startTimer());
    }
  };
  const handleStopSession = () => {
    if (timerData.isRunning) {
      const endTime = new Date();
      const interval = {
        startTime: timerData.startTime,
        endTime,
      };
      if (
        interval.startTime instanceof Date &&
        interval.endTime instanceof Date
      ) {
        dispatch(
          setTimerData({
            ...timerData, // keep other properties of timerData
            intervals: [...timerData.intervals, interval], // update intervals
          }),
        );
      }
      dispatch(stopTimer());
    }
  };

  const formatTime = date => {
    return new Date(date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <View style={styles.sessionTimerContainer}>
      <View style={styles.currentIntervalContainer}>
        <View style={styles.currentIntervalTimes}>
          <Text>
            {timerData.startTime
              ? formatTime(timerData.startTime)
              : 'Not started'}
          </Text>
          <Text>{formatTime(timerData.currentTime)}</Text>
        </View>
        <View style={styles.startStopBtns}>
          <StyledButton medium secondary onPress={handleStartSession}>
            <Text style={styles.btnText}>Start</Text>
          </StyledButton>
          <StyledButton medium secondary onPress={handleStopSession}>
            <Text style={styles.btnText}>Stop</Text>
          </StyledButton>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pastIntervals}>
        {timerData.intervals.map((interval, index) => (
          <View key={index} style={styles.interval}>
            <Text>Interval {index + 1}</Text>
            <Text>Start: {formatTime(interval.startTime)}</Text>
            <Text>End: {formatTime(interval.endTime)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SessionTimer;

// return (
//     <View style={styles.sessionTimerContainer}>
//       <View>
//         <Text style={styles.currentInterval}>
//           {timerData.startTime
//             ? formatTime(timerData.startTime)
//             : 'Not started'}
//         </Text>
//         <Text>{formatTime(timerData.currentTime)}</Text>
//       </View>
//       {timerData.intervals.map((interval, index) => (
//         <View key={index}>
//           <Text>Interval {index + 1}</Text>
//           <Text>Start: {formatTime(interval.startTime)}</Text>
//           <Text>End: {formatTime(interval.endTime)}</Text>
//         </View>
//       ))}
//       <StyledButton medium secondary onPress={handleStartSession}>
//         <Text>Start</Text>
//       </StyledButton>
//       <StyledButton medium secondary onPress={handleStopSession}>
//         <Text>Stop</Text>
//       </StyledButton>
//     </View>
//   );

// const SessionTimer = () => {
//   const dispatch = useDispatch();
//   // Retrieve the timer data from the Redux store
//   const timerData = useSelector(state => state.activeSession.timerData);
//   const [isRunning, setIsRunning] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [intervals, setIntervals] = useState(timerData?.intervals || []);
//   const [startTime, setStartTime] = useState(
//     timerData?.startTime ? new Date(timerData.startTime) : null,
//   );
//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setCurrentTime(new Date());
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const handleStartSession = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       setStartTime(new Date());
//     }
//   };

//   const handleStopSession = () => {
//     if (isRunning) {
//       const endTime = new Date();
//       const interval = {startTime, endTime};
//       // Check if startTime and endTime are valid dates before converting
//       if (
//         interval.startTime instanceof Date &&
//         interval.endTime instanceof Date
//       ) {
//         // console.log('interval is: ', interval);
//         setIntervals(prevIntervals => [...prevIntervals, interval]);
//       }
//       setIsRunning(false);
//       setStartTime(null);
//     }
//   };
//   useEffect(() => {
//     // console.log(timerData);
//     if (!isRunning && intervals.length > 0) {
//       const newTimerData = getTimerDataObject();
//       dispatch(setTimerData(newTimerData));
//     }
//   }, [isRunning, intervals, startTime, dispatch]);

//   useEffect(() => {
//     return () => {
//       // Save the timer data only when the session is running.
//       if (isRunning) {
//         const newTimerData = getTimerDataObject();
//         dispatch(setTimerData(newTimerData));
//       }
//     };
//   }, [isRunning, intervals, startTime, dispatch]);

//   const getTimerDataObject = () => {
//     return {
//       intervals: intervals
//         .map(interval => {
//           if (
//             interval.startTime instanceof Date &&
//             interval.endTime instanceof Date
//           ) {
//             return {
//               startTime: interval.startTime.toISOString(),
//               endTime: interval.endTime.toISOString(),
//             };
//           }
//           return null;
//         })
//         .filter(interval => interval !== null),
//       startTime: startTime ? startTime.toISOString() : null,
//     };
//   };

//   const formatTime = date => {
//     return new Date(date).toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     });
//   };
//   return (
//     <View style={styles.sessionTimerContainer}>
//       {/* Display the timer here using startTime, currentTime, and intervals */}
//       <Text>{startTime ? formatTime(startTime) : 'Not started'}</Text>
//       <Text>{formatTime(currentTime)}</Text>
//       {intervals.map((interval, index) => (
//         <View key={index}>
//           <Text>Interval {index + 1}</Text>
//           <Text>Start: {formatTime(interval.startTime)}</Text>
//           <Text>End: {formatTime(interval.endTime)}</Text>
//         </View>
//       ))}
//       <StyledButton medium secondary onPress={handleStartSession}>
//         <Text>Start</Text>
//       </StyledButton>
//       <StyledButton medium secondary onPress={handleStopSession}>
//         <Text>Stop</Text>
//       </StyledButton>
//     </View>
//   );
// };

// export default SessionTimer;

//almost working but adds extras sometimes

// const SessionTimer = () => {
//     const dispatch = useDispatch();
//     // Retrieve the timer data from the Redux store
//     const timerData = useSelector(state => state.activeSession.timerData);
//     const [isRunning, setIsRunning] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [intervals, setIntervals] = useState(timerData?.intervals || []);
//     const [startTime, setStartTime] = useState(
//       timerData?.startTime ? new Date(timerData.startTime) : null,
//     );
//     useEffect(() => {
//       let interval;
//       if (isRunning) {
//         interval = setInterval(() => {
//           setCurrentTime(new Date());
//         }, 1000);
//       } else {
//         clearInterval(interval);
//       }
//       return () => clearInterval(interval);
//     }, [isRunning]);

//     const handleStartSession = () => {
//       if (!isRunning) {
//         setIsRunning(true);
//         setStartTime(new Date());
//       }
//     };

//     const handleStopSession = () => {
//       if (isRunning) {
//         const endTime = new Date();
//         const interval = {startTime, endTime};
//         // Check if startTime and endTime are valid dates before converting
//         if (
//           interval.startTime instanceof Date &&
//           interval.endTime instanceof Date
//         ) {
//           // console.log('interval is: ', interval);
//           setIntervals(prevIntervals => [...prevIntervals, interval]);
//         }
//         setIsRunning(false);
//         setStartTime(null);
//       }
//     };
//     useEffect(() => {
//       // console.log(timerData);
//       if (!isRunning && intervals.length > 0) {
//         const newTimerData = getTimerDataObject();
//         dispatch(setTimerData(newTimerData));
//       }
//     }, [isRunning, intervals, startTime, dispatch]);

//     useEffect(() => {
//       return () => {
//         // Save the timer data only when the session is running.
//         if (isRunning) {
//           const newTimerData = getTimerDataObject();
//           dispatch(setTimerData(newTimerData));
//         }
//       };
//     }, [isRunning, intervals, startTime, dispatch]);

//     const getTimerDataObject = () => {
//       return {
//         intervals: intervals
//           .map(interval => {
//             if (
//               interval.startTime instanceof Date &&
//               interval.endTime instanceof Date
//             ) {
//               return {
//                 startTime: interval.startTime.toISOString(),
//                 endTime: interval.endTime.toISOString(),
//               };
//             }
//             return null;
//           })
//           .filter(interval => interval !== null),
//         startTime: startTime ? startTime.toISOString() : null,
//       };
//     };

//     const formatTime = date => {
//       return new Date(date).toLocaleTimeString([], {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//       });
//     };
//     return (
//       <View style={styles.sessionTimerContainer}>
//         {/* Display the timer here using startTime, currentTime, and intervals */}
//         <Text>{startTime ? formatTime(startTime) : 'Not started'}</Text>
//         <Text>{formatTime(currentTime)}</Text>
//         {intervals.map((interval, index) => (
//           <View key={index}>
//             <Text>Interval {index + 1}</Text>
//             <Text>Start: {formatTime(interval.startTime)}</Text>
//             <Text>End: {formatTime(interval.endTime)}</Text>
//           </View>
//         ))}
//         <StyledButton medium secondary onPress={handleStartSession}>
//           <Text>Start</Text>
//         </StyledButton>
//         <StyledButton medium secondary onPress={handleStopSession}>
//           <Text>Stop</Text>
//         </StyledButton>
//       </View>
//     );
//   };

//   export default SessionTimer;
