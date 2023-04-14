import LoginScreen from '../src/screens/mainScreen/LoginScreen';
import HomeScreen from '../src/screens/mainScreen/HomeScreen';
import RegistrationScreen from '../src/screens/mainScreen/RegistrationScreen';
import CreatePostsScreen from '../src/screens/mainScreen/CreatePostsScreen';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from '../src/screens/mainScreen/MapScreen';
// import CommentsScreen from '../screens/CommentsScreen';

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
      <MainStack.Screen name="MapScreen" component={MapScreen} />
      {/* <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Choose location',
        }}
      />
      <MainStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: 'Make comment',
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

export default ({ isAuth }) => (
  <MainStack.Navigator initialRouteName="Login">
    {useAuth(isAuth)}
  </MainStack.Navigator>
);
