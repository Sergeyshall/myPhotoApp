import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

const MainStack = createStackNavigator();

const useAuth = (isAuth, logoutHandler) => isAuth ? (
  <>
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
            onPress={logoutHandler}
            title="Logout"
            color="#fff"
          />
        ),
      }}
    />
  </>
) : (<>
    <MainStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: 'Login screen',
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="Registration"
      component={RegistrationScreen}
      options={{
        title: 'Registration screen',
        headerShown: false,
      }}
    />
  </>
);

export default Router = ({isAuth, logoutHandler}) => (<MainStack.Navigator initialRouteName="Login">
{useAuth(isAuth, logoutHandler)}
</MainStack.Navigator>)