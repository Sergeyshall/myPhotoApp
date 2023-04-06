import react from 'react';
import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreen from '../nestedScreens/DefaultScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen';
import MapScreen from '../nestedScreens/MapScreen';
const NestedScreen = createStackNavigator();
const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreen}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
      />
      <NestedScreen.Screen name="MapScreen" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
