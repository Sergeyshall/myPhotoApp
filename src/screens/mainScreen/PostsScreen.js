import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../nestedScreens/DefaultScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen';
import Context from '../../../context';
import LogoutSvg from '../../../Img/LogOutSvg';

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  const context = useContext(Context);

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
              // onPress={() => context.setIsAuth(false)}
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
