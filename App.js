import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './screens/RegistrationScreen';
import useCachedResources from './hooks/useCachedResources';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const MainStack = createStackNavigator();
const App = () => {
  console.log('Maria');
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <View style={{ height: '100%' }}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Registration">
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ title: 'Registration screen' }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login screen' }}
          />
          <MainStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home screen',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Press me"
                  color="#fff"
                />
              ),
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
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
