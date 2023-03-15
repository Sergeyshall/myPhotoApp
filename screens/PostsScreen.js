import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import imgAvatar from '../Img/Avatar.jpg';
import imgForest from '../Img/Forest.jpg';
import Wrapper from '../components/Wrapper';

export default PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <Image
          source={imgAvatar}
          resizeMode="cover"
          style={styles.imgAvatar}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>Natalia Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imgWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginLeft: 16,

    // justifyContent: 'center',
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
  imgAvatar: {
    borderRadius: 16,
    width: 60,
    height: 60,
  },
});
