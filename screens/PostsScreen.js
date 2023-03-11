import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import imgForest from '../Img/Forest.jpg';
import Wrapper from '../components/Wrapper';

export default PostsScreen = () => {
  return (
    <View>
      <View>
        <Text>Posts</Text>
      </View>
      <Image
        // source={require(imgForest)}
        resizeMode="cover"
        style={styles.imagePost}
      />
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

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
