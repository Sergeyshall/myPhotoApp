// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import imgForest from '../Img/Forest.jpg';
export default CreatePostScreen = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
      <Ionicons name="trash" color="white" />
    </TouchableOpacity>
  );
};

// const Tabs = createBottomTabNavigator();
// const DeleteButton = () => {
//   <>
//     <View style={{ ...styles.btn, backgroundColor: 'gray' }}>
//       <Ionicons name={iconName} size={size} color={colorIcon} />
//     </View>
//   </>;
// };

// export default CreatePostsScreen = () => {
//   return (
//     <>
//       <Tabs.Navigator>
//         <Tabs.Screen
//           name="CreatePost"
//           component={() => (
//             <View style={styles.container}>
//               <Text>Create Post</Text>
//             </View>
//           )}
//           options={{
//             tabBarIcon: ({ name, color, size }) => (
//               <Ionicons name="trash" color={'#F6F6F6'} size={size} />
//             ),
//           }}
//           listeners={{
//             tabPress: (e) => {
//               // Prevent default action
//               e.preventDefault();
//               alert('Home');
//             },
//           }}
//         />
//       </Tabs.Navigator>
//     </>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginLeft: 16,
    marginRight: 16,
    width: 70,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
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
});
