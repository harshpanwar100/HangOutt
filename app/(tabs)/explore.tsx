import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

interface MarkerData {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  themeColor: string;
  icon: string;
}

const markersData: MarkerData[] = [
  {
    id: 1,
    latitude: 28.58004423558824,
    longitude: 77.18926461476855,
    title: 'New Year Party',
    description: 'Old Skool Theme',
    themeColor: '#FF6B6B',
    icon: '🎉',
  },
  {
    id: 2,
    latitude: 28.586238176212053,
    longitude: 77.19087545592689,
    title: 'Skateboarding',
    description: 'Game of Skate',
    themeColor: '#4ECDC4',
    icon: '🛹',
  },
];

export default function ExploreScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}>
        {markersData.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}>
            <View style={styles.markerWrapper}>
              <View style={[styles.markerContainer, { backgroundColor: marker.themeColor }]}>
                <Text style={styles.markerIcon}>{marker.icon}</Text>
                <View style={styles.markerContent}>
                  <Text style={styles.markerTitle}>{marker.title}</Text>
                  <Text style={styles.markerDescription}>{marker.description}</Text>
                </View>
              </View>
              <View style={[styles.markerTriangle, { borderTopColor: marker.themeColor }]} />
            </View>
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text style={styles.calloutDescription}>{marker.description}</Text>
                <Text style={styles.calloutEmoji}>{marker.icon}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerWrapper: {
    alignItems: 'center',
  },
  markerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    minWidth: 140,
  },
  markerIcon: {
    fontSize: 28,
    marginRight: 8,
  },
  markerContent: {
    flex: 1,
  },
  markerTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 2,
  },
  markerDescription: {
    fontSize: 10,
    color: '#fff',
    opacity: 0.9,
  },
  markerTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginTop: -1,
  },
  calloutContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    minWidth: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  calloutDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  calloutEmoji: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 4,
  },
  errorText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  loadingText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
