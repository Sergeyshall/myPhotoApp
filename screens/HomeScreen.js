import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import ProfileScreen from './ProfileScreen';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

const PROFILE_ROUTE = 'Profile'
const POSTS_ROUTE = 'Posts'
const CREATEPOSTSCREEN_ROUTE = 'CreatePostsScreen'

const getIcon = (iconName, size, color, disabled) => !disabled ? <Ionicons name={iconName} size={size} color={color} /> : null

const getButton = (iconName, size, colorIcon, colorButton, disabled) => !disabled ? (<>
<View style={{...styles.btn, backgroundColor: colorButton}}>
  <Ionicons name={iconName} size={size} color={colorIcon} />
</View></>) : null

const tabOptionsButtonsDisabledMap = {
  [CREATEPOSTSCREEN_ROUTE]: {
    [POSTS_ROUTE]: true,
    [PROFILE_ROUTE]: true,
  }
}

const tabOptionsButtonsMap = {
  [PROFILE_ROUTE]: {
    focused: (size, color, disabled) => getIcon('person', size, color, disabled),
    blured: (size, color, disabled) => getIcon('person-outline', size, color, disabled)
  },
  [POSTS_ROUTE]: {
    focused: (size, color, disabled) => getIcon('images', size, color, disabled),
    blured: (size, color, disabled) => getIcon('images-outline', size, color, disabled)
  },
  [CREATEPOSTSCREEN_ROUTE]: {
    focused: (size, color, disabled) => getButton('trash', size, 'gray', '#F6F6F6', disabled),
    blured: (size, color, disabled) => getButton('add-outline', size, 'white','tomato',disabled)
  },
}

export default HomeScreen = ({ onRegisterPress }) => {
  const navigation = useNavigation()
  return (
    <>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            console.log("route=====", route);

            const focusedState = focused ? 'focused' : 'blured';

            return tabOptionsButtonsMap[route.name][focusedState](size, color)
          },
        })}

        tabBarOptions={{
          showLabel:false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen 
          name={POSTS_ROUTE}
          component={PostsScreen} 
          //   options={({ route }) => ({
          //     tabBarButton: () => (
          //         route.name.includes(CREATEPOSTSCREEN_ROUTE) &&
          //         null
          //     ),
          // })}
          />
        <Tabs.Screen
          name={CREATEPOSTSCREEN_ROUTE}
          component={CreatePostsScreen}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
        
              //Any custom code here
              navigation.navigate('CreatePostsScreen')
            },
          }}
          onPress
        />
        <Tabs.Screen name={PROFILE_ROUTE} component={ProfileScreen} />
        {/* <Tabs.Screen name="Home"  
         options={({navigation})=> ({
           tabBarButton:props => <TouchableOpacity {...props} onPress={()=>navigation.navigate('CreatePostsScreen')}/>
    })}/> */}
      </Tabs.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    margin: 5,
    width: 70,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderWidth: 0,
    borderRadius: 100,
    padding: 5,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
});
