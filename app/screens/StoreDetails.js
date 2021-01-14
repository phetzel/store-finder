import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';

const StoreDetails = ({ route }) => {
    const store = route.params.store;

    return (
        <View style={styles.container}>
            <Image source={require("../assets/store.jpg")} style={styles.image} />
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.address}>{store.address}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    address: {
        fontSize: 20,
        marginTop: 5
    },
  container: {
      flex: 1,
      backgroundColor: colors.white
  },
  image: {
      height: 300,
      width: '100%'
  },
  storeName: {
      fontSize: 25,
      marginTop: 10
  }
});

export default StoreDetails;