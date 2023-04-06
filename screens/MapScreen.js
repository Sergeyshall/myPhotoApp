import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';

export default MapScreen = ({ route }) => {
  const [location, setLocation] = useState({
    latitude: 50.456782,
    longitude: 30.408867,
  });
  useEffect(() => {
    console.log(route.params);
    if (route.params) {
      //setLocation(route.params.location);
    }
  }, [route.params]);

  console.log('location', location);
  return (
    <View style={styles.container}>
      <Text>Your geolocation</Text>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker
            title="I am here"
            coordinate={location}
            description="Hello"
          />
        )}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: '100%',
  },
});
