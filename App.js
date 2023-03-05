import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  console.log('Maria');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! </Text>
      <Text style={styles.mariaText}>Hello, Maria!</Text>
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
