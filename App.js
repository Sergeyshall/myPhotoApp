import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
import useCachedResources from './hooks/useCachedResources';
import LoginScreen from './screens/LoginScreen';
import { useState } from 'react';

const LOGIN_PAGE = 'login';
const REGISTRATION_PAGE = 'register';

const App = () => {
  console.log('Maria');
  const isLoadingComplete = useCachedResources();
  const [currentPage, setCurrentPage] = useState(LOGIN_PAGE);

  if (!isLoadingComplete) {
    return null;
  }

  const pages = {
    [LOGIN_PAGE]: (
      <LoginScreen
        onRegisterPress={() => setCurrentPage(REGISTRATION_PAGE)}
      />
    ),
    [REGISTRATION_PAGE]: (
      <RegistrationScreen
        onSignInPress={() => setCurrentPage(LOGIN_PAGE)}
      />
    ),
  };

  return (
    <View style={styles.container}>
      {pages[currentPage]}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mariaText: {
    color: 'pink',
  },
});
