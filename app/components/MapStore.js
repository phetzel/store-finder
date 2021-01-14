import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors';

const MapStore = ({ store }) => {
  const navigation = useNavigation();

  if (!store) return null;

  const handlePress = () => {
    navigation.navigate("StoreDetails", { store: store });
  }

  return (
      <TouchableOpacity 
        onPress={handlePress}
        style={styles.container}>
          {/* <Image source={{ uri: store.photoUrl }} style={styles.image} /> */}
          <Image source={require("../assets/store.jpg")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{store.name}</Text>
            <Text style={styles.text}>{store.address}</Text>
          </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    height: 90,
  },
  image: {
    borderRadius: 10,
    height: 90,
    width: 90
  },
  text: {
    fontSize: 16
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default MapStore;