import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import FormContainer from '../../Components/form/FormContainer/FormContainer';
import Input from '../../Components/form/Input/Input';
import Error from '../../Components/Error/Error';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../api/user';
import StyledButton from '../../Components/StyledButton';
import styles from './styles';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const register = () => {
    if (email === '' || name === '' || password === '') {
      setError('Please include all fields');
    } else {
      setError();
      console.log('registered');
    }
    let user = {
      name: name,
      email: email,
      password: password,
      isAdmin: false,
    };
    registerUser(user, dispatch);
  };

  return (
    <View style={styles.registerContainer}>
      <FormContainer title={'Register'}>
        <Input
          placeholder={'Name'}
          name={'name'}
          id={'name'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder={'Email'}
          name={'email'}
          id={'email'}
          value={email}
          secureTextEntry={false}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder={'Password'}
          name={'password'}
          id={'password'}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
          <StyledButton xlarge primary onPress={() => register()}>
            <Text style={styles.btnText}>Register</Text>
          </StyledButton>
        </View>
        <View>
          <StyledButton
            xlarge
            secondary
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Back To Login</Text>
          </StyledButton>
        </View>
      </FormContainer>
    </View>
  );
};

export default Register;
