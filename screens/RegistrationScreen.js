import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import imgBg from '../Img/PhotoBG.jpg';
import imgAvatar from '../Img/Avatar.jpg';
import AddSvg from '../Img/AddSvg';

const initialState = {
  login: '',
  email: '',
  password: '',
};
export default RegistrationScreen = () => {
  // const [login, setLogin] = React.useState('');
  // const [mail, setMail] = React.useState('');
  // const [passWord, setPassWord] = React.useState('');
  const [state, setState] = useState(initialState);
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const keybordHide = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  };
  return (
    <TouchableWithoutFeedback onPress={keybordHide}>
      <View style={styles.container}>
        <ImageBackground
          source={imgBg}
          resizeMode="cover"
          style={styles.imageBG}
        />

        <View style={styles.registrationWrap}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <View>
              <Image
                source={imgAvatar}
                resizeMode="cover"
                style={styles.imageAvatar}
              />
              <AddSvg style={styles.AddSvg} />
            </View>
            <Text style={styles.title}>Registration</Text>
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeybord ? 20 : 78,
              }}
            >
              <TextInput
                style={styles.input}
                // onChangeText={(login) => setLogin(login)}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    login: value,
                  }))
                }
                placeholder="Login"
                onFocus={() => setIsShowKeybord(true)}
              ></TextInput>
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
                secureTextEntry={true}
                onFocus={() => setIsShowKeybord(true)}
              ></TextInput>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keybordHide}
              >
                <Text style={styles.btnText}>Registered</Text>
              </TouchableOpacity>
              <Text style={styles.signInText}>
                Has already registered? Sign In
              </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  imageBG: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  registrationWrap: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingBottom: 16,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowOpacity: 1,
    shadowRadius: 25,
    shadowColor: 'black',
    gap: 16,
    backgroundColor: '#FFFFFF',
    color: '#BDBDBD',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    gap: 16,

    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
      android: { justifyContent: 'flex-end' },
    }),
  },
  imageAvatar: {
    borderRadius: 20,
    marginTop: -60,
    marginBottom: -60,
    width: 120,
    height: 120,
  },

  AddSvg: {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    transform: [{ translateY: 20 }, { translateX: 105 }],
  },
  title: {
    marginTop: 92,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    textAlign: 'left',
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 18,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 10,
  },
  inputPassWord: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    textAlign: 'left',
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 18,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#171717',
    shadowOpacity: 4,
    shadowRadius: 4,
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
  },

  signInText: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
