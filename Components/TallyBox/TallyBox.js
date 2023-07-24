import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
const TallyBox = ({title, count, updateTally}) => {
  const pressHandler = () => {
    let newCount = count + 1;
    updateTally(title, newCount);
  };

  const longPressHandler = () => {
    if (count > 0) {
      let newCount = count - 1;
      updateTally(title, newCount);
    }
  };

  return (
    <View style={styles.outer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity onLongPress={longPressHandler} onPress={pressHandler}>
        <View style={styles.container}>
          <Text>{count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TallyBox;

// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import styles from './styles';

// const TallyBox = props => {
//   const {title} = props;
//   const [count, setCount] = useState(0);

//   const pressHandler = () => {
//     let newCount = count + 1;
//     setCount(newCount);
//     props.getTally(title, newCount);
//   };
//   const longPressHandler = () => {
//     let curCount = count;
//     if (curCount > 0) {
//       let newCount = count - 1;
//       setCount(newCount);
//       props.getTally(title, newCount);
//     }
//   };

//   return (
//     <View style={styles.outer}>
//       <View style={styles.titleContainer}>
//         <Text style={styles.title}>{title}</Text>
//       </View>

//       <TouchableOpacity
//         onLongPress={() => longPressHandler()}
//         onPress={() => pressHandler()}>
//         <View style={styles.container}>
//           <Text>{count}</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default TallyBox;
