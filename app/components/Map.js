import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

import MapStore from './MapStore';

const Map = ({ stores }) => {
  const [clickedStore, setClickedStore] = useState();
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.804363,
          longitude: -122.271111,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
      }}
        provider={MapView.PROVIDER_GOOGLE}>
        
        { stores && 
          stores.map((store, idx) => (
            <Marker 
              coordinate={{ latitude: store.lat, longitude: store.lng }}
              key={idx}
              onPress={() => setClickedStore(store)}>

            </Marker>
          ))
        }
        <View style={styles.store}>
          <MapStore store={clickedStore} />
        </View>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  store: {
    marginTop: 690
  }
});

export default Map;