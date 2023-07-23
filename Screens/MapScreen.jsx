import React from "react";
import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Footer from "../Components/Footer";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Footer heading={"Карта"} backIconActive={true} />

      <MapView
        style={styles.map}
        region={{
          latitude: 48.218708,
          longitude: 24.28666,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker
          title="Photo location"
          coordinate={{ latitude: 48.218708, longitude: 24.28666 }}
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

  footer: {
    marginTop: StatusBar.currentHeight,
    height: 44,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderColor: "#0000004c",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  textHeading: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
  },

  svgArrowLeft: {
    position: "absolute",
    top: 10,
    left: 16,
  },
});

export default CreatePostsScreen;
