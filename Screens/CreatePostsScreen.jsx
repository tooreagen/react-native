import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Footer
          heading={"Створити публікацію"}
          backIconActive={true}
          logOutIconActive={false}
        />

        <View style={styles.main}>
          <View style={styles.photoWrapper}>
            {false ? <Image /> : <SvgCamera />}
          </View>
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
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
