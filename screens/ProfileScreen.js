import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import PostsScreen from './PostsScreen';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import imgForest from '../Img/Forest.jpg';
import imgAvatar from '../Img/Avatar.jpg';
import AddSvg from '../Img/AddSvg';
import Wrapper from '../components/Wrapper';

// const Tabs = createBottomTabNavigator();

// const PROFILE_ROUTE = 'Profile';
// const POSTS_ROUTE = 'Posts';
// const CREATEPOSTSCREEN_ROUTE = 'CreatePostsScreen';

export default ProfileScreen = () => {
  return (
    <View>
      <View>
        <Text>Profile</Text>
      </View>
      <Image
        source={imgAvatar}
        resizeMode="cover"
        style={styles.imgAvatar}
      />
      <Image
        // source={require(imgForest)}
        resizeMode="cover"
        style={styles.imagePost}
      />
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>

      {/* <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            console.log(route);

            if (route.name === { CREATEPOSTSCREEN_ROUTE }) {
              iconName = focused ? 'add' : 'add-outline';
            } else if (route.name === { POSTS_ROUTE }) {
              iconName = focused ? 'images' : 'images-outline';
            }
            return (
              <Ionicons name={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name={POSTS_ROUTE} component={PostsScreen} />
        <Tabs.Screen
          name={CREATEPOSTSCREEN_ROUTE}
          component={CreatePostsScreen}
        />

        <Tabs.Screen
          name={PROFILE_ROUTE}
          component={() => (
            <View
              style={{ ...styles.btn, backgroundColor: 'tomato' }}
            >
              <Text>Profile</Text>
            </View>
          )}
          options={{
            tabBarIcon: ({ name, color, size }) => (
              <Ionicons name="person" color={'white'} size={size} />
            ),
          }}
          // listeners={{
          //   tabPress: (e) => {
          //     // Prevent default action
          //     e.preventDefault();
          //     alert('Home');
          //   },
          // }}
        />
      </Tabs.Navigator> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgAvatar: {
    borderRadius: 20,
    marginTop: -60,
    marginBottom: -60,
    width: 120,
    height: 120,
  },
  btn: {
    marginLeft: 16,
    marginRight: 16,
    width: 70,
    height: 40,
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
  imagePost: {
    borderRadius: 20,
    width: 120,
    height: 120,
  },
});
