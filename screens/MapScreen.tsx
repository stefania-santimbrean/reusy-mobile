import { StyleSheet, Dimensions, Alert } from 'react-native';

import { RootTabScreenProps } from '../types';
import { View, Text } from '../components/Themed';
import MapView, {Marker} from 'react-native-maps';

import React, { useEffect } from 'react';
import * as Location from 'expo-location';

export default function MapScreen({ navigation }: RootTabScreenProps<'Map'>) {

    const [location, setLocation] = React.useState({
        coords: {
            latitude: 45.9442858,
            longitude: 25.0094303
        }
    });
    const [errorMsg, setErrorMsg] = React.useState('');
    const [markerLocation, setMarkerLocation] = React.useState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Alert.alert(errorMsg);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        })();
    }, []);

    useEffect(() => {
        setMarkerLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    }, [location])

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                >
                <Marker draggable
                    coordinate={markerLocation}
                    onDragEnd={(e) => setMarkerLocation(e.nativeEvent.coordinate )}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
