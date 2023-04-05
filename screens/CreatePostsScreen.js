// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default CreatePostScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');
  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log('cam', photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate('Posts', { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 200, height: 200, borderRadius: 10 }}
            />
          </View>
        )}
        <TouchableOpacity
          onPress={takePhoto}
          style={styles.snapContainer}
        >
          <Text style={styles.snap}>Use camera</Text>
        </TouchableOpacity>
      </Camera>
      <Text>Post your photo</Text>
      <TouchableOpacity onPress={sendPhoto} style={styles.sentBtn}>
        <Text style={styles.snap}>Publish</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Ionicons name="trash" color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    height: '50%',
    marginHorizontal: 16,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  snap: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },

  snapContainer: {
    marginTop: 200,
    width: 70,
    height: 70,
    backgroundColor: 'gray',
    borderRadius: '50',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
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
  sentBtn: {
    backgroundColor: 'gray',
    width: 343,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
