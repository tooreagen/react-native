import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import SvgCamera from "../assets/icons/camera.svg";
import SvgMapPin from "../assets/icons/map-pin.svg";
import ButtonComponent from "../Components/Button";
import Footer from "../Components/Footer";

const screenHeight = Dimensions.get("window").height;

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [locationPermission, setLocationPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraImage, setCameraImage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(cameraStatus.status === "granted");

      const locationStatus = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(locationStatus.status === "granted");
    })();
  }, []);

  const handlePhotoDelete = () => {
    setCameraImage(null);
  };

  const handlePhotoPost = async () => {
    if (locationPermission) {
      const location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
      navigation.navigate("PostsScreen");
    }
  };

  if (!hasPermission) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18, color: "#ff0000" }}>
          Немає доступу до камери
        </Text>
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
          {!cameraImage ? (
            <Camera type={Camera.Constants.Type.back} ref={setCameraRef}>
              <TouchableOpacity
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                    setCameraImage(uri);
                  }
                }}
              >
                <View style={styles.photoWrapper}>
                  <SvgCamera />
                </View>
              </TouchableOpacity>
            </Camera>
          ) : (
            <View style={styles.photoWrapper}>
              <Image source={{ uri: cameraImage }} />
            </View>
          )}

          <Text style={styles.photoLabel}>
            {cameraImage ? "Редагувати фото" : "Завантажте фото"}
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
            disabled={cameraImage ? false : true}
            style={{ marginTop: 32 }}
            title="Опублікувати"
            onPress={handlePhotoPost}
          />
        </View>

        <View style={styles.toolBar}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handlePhotoDelete}
            disabled={cameraImage ? false : true}
          >
            <Ionicons
              style={{ borderRadius: 50 }}
              backgroundColor={cameraImage ? "#FF6C00" : "#f6f6f6"}
              paddingLeft={23}
              paddingRight={23}
              paddingTop={8}
              paddingBottom={8}
              name={"trash-outline"}
              size={24}
              color={cameraImage ? "#ffffff" : "#bdbdbd"}
            />
          </TouchableOpacity>
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
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
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

  toolBar: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
});

export default CreatePostsScreen;
