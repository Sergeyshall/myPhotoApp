import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../nestedScreens/DefaultScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen';
import LogoutSvg from '../../../Img/LogOutSvg';
import { authSignOutUser } from "../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  const dispatch = useDispatch();

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreen}
        options={{
          title: 'Posts',
          headerRight: () => (
            <LogoutSvg
              style={styles.logoutSvg}
              onPress={() => dispatch(authSignOutUser())}
            />
          ),
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
      />
      {/* <NestedScreen.Screen name="MapScreen" component={MapScreen} /> */}
    </NestedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  logoutSvg: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});

export default PostsScreen;
