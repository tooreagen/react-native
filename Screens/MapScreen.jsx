import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Footer from "../Components/Footer";

const MapScreen = ({ route }) => {
  const { latitude = 50.451117, longitude = 30.52222 } =
    route.params.location || {};

  return (
    <View style={styles.container}>
      <Footer heading={"Карта"} backIconActive={true} />

      <MapView
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker
          title="Photo location"
          coordinate={{ latitude, longitude }}
          description="Hello, this is location photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
