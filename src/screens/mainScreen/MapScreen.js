import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect, useContext } from 'react';
import Context from '../../../context';

export default MapScreen = ({ route, navigation }) => {
  const { context, setContext } = useContext(Context);
  const [location, setLocation] = useState(null);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setLocation(coordinate);
  };

  useEffect(() => {
    console.log(route.params);
    if (route.params) {
      setLocation(route.params.location);
    }
  }, [route.params]);

  // console.log('location', location);
  return (
    <View style={styles.container}>
      <Text>
        Your geolocation {location?.latitude},{location?.longitude}
      </Text>
      {location ? (
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            ...location,
            latitudeDelta: 0.001,
            longitudeDelta: 0.006,
          }}
          onPress={handleMapPress}
          showsUserLocation={true}
        >
          <Marker
            title="My Photo"
            coordinate={location}
            description="Travel Photo"
            onPress={() => {
              setContext((prevState) => ({ ...prevState, location }));
              navigation.goBack();
            }}
          />
        </MapView>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: '100%',
  },
});
