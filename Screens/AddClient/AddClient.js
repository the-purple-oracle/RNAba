import React, {useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import FormContainer from '../../Components/form/FormContainer/FormContainer';
import Input from '../../Components/form/Input/Input';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {addClient} from '../../api/clients';
import DocumentPickerComponent from '../../Components/DocumentPicker/DocumentPicker';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const AddClient = props => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [behaviors, setBehaviors] = useState(['']);
  const [notes, setNotes] = useState('');
  const [pdfBase, setPdfBase] = useState();

  const onSubmit = () => {
    //send new client to backend

    if (name === '' || user === '') {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please fill in all fields',
        text2: 'Try again later',
      });
    } else {
      const newClient = {
        name: name,
        behaviors: behaviors,
        notes: notes,
        user: user.user.userId,
        pdf: pdfBase,
      };
      // console.log(pdfBase);
      addClient(newClient, user.token, navigation);
      setName('');
      setBehaviors(['']);
      setNotes('');
    }
  };

  const handleAdd = () => {
    const newList = [...behaviors, ''];
    setBehaviors(newList);
  };

  const handleChange = (value, i) => {
    const inputData = [...behaviors];
    inputData[i] = value;
    setBehaviors(inputData);
  };

  const handleDelete = i => {
    const deleteVal = [...behaviors];
    deleteVal.splice(i, 1);
    if (deleteVal.length == 0) {
      setBehaviors(['']);
    } else {
      setBehaviors(deleteVal);
    }
  };
  return (
    <View>
      <View style={styles.goBackBtn}>
        <GoBackBtn />
      </View>
      <View style={styles.container}>
        <FormContainer>
          <Text style={styles.labelText}>Client Name</Text>
          <Input
            placeholder="Client Name"
            name="name"
            id="name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <View style={styles.behaviorsTitle}>
            <Text style={styles.labelText}>Behaviors</Text>
            <Button title="add" onPress={() => handleAdd()} />
          </View>

          {behaviors.map((data, i) => {
            return (
              <View style={styles.behaviorInput} key={i}>
                <TextInput
                  key={i}
                  value={behaviors[i]}
                  placeholder="add behavior"
                  onChangeText={e => handleChange(e, i)}
                  style={styles.input}
                />
                <Button title="x" onPress={() => handleDelete(i)} />
              </View>
            );
          })}
          <View style={styles.pickerContainer}>
            <Text style={styles.labelText}>Client Treatment Plan</Text>
            <View style={styles.picker}>
              <DocumentPickerComponent setPdfBase={setPdfBase} />
            </View>
          </View>

          <Text style={styles.labelText}>Notes</Text>
          <TextInput
            style={styles.notesInput}
            multiline
            numberOfLines={6}
            returnKeyType="done"
            placeholder="Notes"
            name="notes"
            id="notes"
            value={notes}
            onChangeText={text => setNotes(text)}
          />

          <Button title="Submit" onPress={onSubmit} />
        </FormContainer>
      </View>
    </View>
  );
};

export default AddClient;
