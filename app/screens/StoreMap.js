import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { fetchStores } from '../api/store_api';
import Map from '../components/Map';

const StoreMap = (props) => {
    const [stores, setStores] = useState();

    useEffect(() => {
        fetchStores().then(res => {
            console.log(res); 
            setStores(res.data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Map stores={stores} />
        </View>
    );
};
const styles = StyleSheet.create({
  container: {},
});

export default StoreMap;