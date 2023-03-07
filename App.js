import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
const App = () => {
  console.log('Maria');
  return (
    <View style={styles.container}>
      <RegistrationScreen />

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
