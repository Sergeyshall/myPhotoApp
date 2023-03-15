import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePostsScreen from '../screens/CreatePostsScreen';
// import ProfileScreen from '../screens/ProfileScreen';
const MainStack = createStackNavigator();

const useAuth = (isAuth) =>
  isAuth ? (
    <>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: 'Create Post',
        }}
      />
      {/* <MainStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </>
  ) : (
    <>
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

export default Router = ({ isAuth }) => (
  <MainStack.Navigator initialRouteName="Login">
    {useAuth(isAuth)}
  </MainStack.Navigator>
);
