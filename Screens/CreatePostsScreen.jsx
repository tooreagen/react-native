import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SvgCamera from "../assets/icons/camera.svg";
import SvgMapPin from "../assets/icons/map-pin.svg";
import ButtonComponent from "../Components/Button";
import Footer from "../Components/Footer";

const screenHeight = Dimensions.get("window").height;

const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18, color: "#ff0000" }}>Немає доступу до камери</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Footer
          heading={"Створити публікацію"}
          backIconActive={true}
          logOutIconActive={false}
        />

        <View style={styles.main}>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={setCameraRef}
          >
            <TouchableOpacity
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                }
              }}
            >
              <View style={styles.photoWrapper}>
                <SvgCamera />
              </View>
            </TouchableOpacity>
          </Camera>

          <Text style={styles.photoLabel}>
            {false ? "Редагувати фото" : "Завантажте фото"}
          </Text>

          <TextInput
            style={[
              styles.textInput,
              { marginTop: 32, fontFamily: "RobotoMedium" },
            ]}
            placeholder="Назва..."
            placeholderTextColor={"#bdbdbd"}
          />

          <View>
            <TextInput
              style={[styles.textInput, { marginTop: 16, paddingLeft: 28 }]}
              placeholder="Місцевість..."
              placeholderTextColor={"#bdbdbd"}
            />
            <TouchableOpacity activeOpacity={0.5}>
              <SvgMapPin style={styles.svgMapPin} />
            </TouchableOpacity>
          </View>

          <ButtonComponent
            disabled={false ? false : true}
            style={{ marginTop: 32 }}
            title="Опублікувати"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  main: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },

  photoWrapper: {
    height: screenHeight * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  photoLabel: {
    marginTop: 8,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: "#bdbdbd",
  },

  textInput: {
    paddingTop: 16,
    paddingBottom: 16,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: "#212121",

    borderColor: "#e8e8e8",
    borderBottomWidth: 1,
  },

  svgMapPin: {
    position: "absolute",
    bottom: 17,
  },
});

export default CreatePostsScreen;
