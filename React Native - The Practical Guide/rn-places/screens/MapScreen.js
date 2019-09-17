import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = props => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };
  return <MapView style={styles.map} region={mapRegion} />;
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
