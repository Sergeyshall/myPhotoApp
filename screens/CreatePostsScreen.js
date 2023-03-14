import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import imgForest from '../Img/Forest.jpg';

const Tabs = createBottomTabNavigator();
const DeleteButton = () => {
  <>
    <View style={{ ...styles.btn, backgroundColor: 'gray' }}>
      <Ionicons name={iconName} size={size} color={colorIcon} />
    </View>
  </>;
};

export default CreatePostsScreen = () => {
  return (
    <>
      <Tabs.Navigator>
        <Tabs.Screen
          name="CreatePost"
          component={() => (
            <View style={styles.container}>
              <Text>Create Post</Text>
            </View>
          )}
          options={{
            tabBarIcon: ({ name, color, size }) => (
              <Ionicons name="trash" color={'#F6F6F6'} size={size} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
              alert('Home');
            },
          }}
        />
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
