import { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import Wrapper from '../components/Wrapper';
import Context from '../context';

const initialState = {
  login: '',
  email: '',
  password: '',
};
export default LoginScreen = ({ onLoginSuccessful, navigation }) => {
  const context = useContext(Context);
  // const [login, setLogin] = React.useState('');
  // const [mail, setMail] = React.useState('');
  // const { userId } = route.params;
  const [passWord, setPassWord] = useState('');
  const [state, setState] = useState(initialState);
  const [isShowKeybord, setIsShowKeybord] = useState(false);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const keybordHide = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  };

  const loginHandler = () => {
    keybordHide();

    onLoginSuccessful();
  };

  return (
    <Wrapper title="Login" hideAvatar>
      <TextInput
        style={styles.input}
        value={state.email}
        // onChangeText={(mail) => setMail(mail)}
        onChangeText={(value) =>
          setState((prevState) => ({
            ...prevState,
            email: value,
          }))
        }
        // value={mail}
        placeholder="e-mail"
        onFocus={() => setIsShowKeybord(true)}
      ></TextInput>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassWord}
          // onChangeText={(passWord) => setPassWord(passWord)}
          onChangeText={(value) =>
            setState((prevState) => ({
              ...prevState,
              password: value,
            }))
          }
          value={state.password}
          placeholder="Password"
          secureTextEntry={passwordVisibility}
          onFocus={() => setIsShowKeybord(true)}
        ></TextInput>
        <Text
          style={styles.showText}
          onPress={handlePasswordVisibility}
        >
          {rightIcon}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={() => {
          context.setIsAuth(true);
        }}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.signInText}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      >
        Do not have account? Register
      </Text>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    textAlign: 'left',
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 18,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 10,
  },
  passwordContainer: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    textAlign: 'left',
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 18,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputPassWord: {
    height: 50,
    textAlign: 'left',
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 18,
  },
  showText: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  btn: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderWidth: 0,
    borderRadius: 100,
    padding: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
  signInText: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});
