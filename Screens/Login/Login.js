import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FormContainer from '../../Components/form/FormContainer/FormContainer';
import Input from '../../Components/form/Input/Input';
import StyledButton from '../../Components/StyledButton';
import Error from '../../Components/Error/Error';
import {loginUser, getUserProfile} from '../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {Routes} from '../../Navigation/Routes';

const Login = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const userInput = {
      email,
      password,
    };
    if (email === '' || password === '') {
      setError('Please fill in credentials');
    } else {
      setError();
      loginUser(userInput, dispatch);
    }
  };
  return (
    <View style={styles.loginContainer}>
      <FormContainer title={'Login'}>
        <Input
          placeholder={'Enter Email'}
          name={'email'}
          id={'email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder={'Enter Password'}
          name={'password'}
          id={'password'}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
          <StyledButton large primary onPress={() => handleSubmit()}>
            <Text style={styles.btnText}>Login</Text>
          </StyledButton>
        </View>
        <View style={[{marginTop: 40}, styles.buttonGroup]}>
          <Text style={styles.middleText}>Don't have an account yet?</Text>
          <StyledButton
            large
            secondary
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>Register</Text>
          </StyledButton>
        </View>
      </FormContainer>
    </View>
  );
};

export default Login;
