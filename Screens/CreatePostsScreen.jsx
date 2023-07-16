import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import SvgTrash from "../assets/icons/trash.svg";
import SvgArrowLeft from "../assets/icons/arrow-left.svg";
import SvgCamera from "../assets/icons/camera.svg";
import SvgMapPin from "../assets/icons/map-pin.svg";
import ButtonComponent from "../Components/Button";

const screenHeight = Dimensions.get("window").height;

const PostsPublicationsCreate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.textHeading}>Створити публікацію</Text>
        <TouchableOpacity style={styles.svgArrowLeft} activeOpacity={0.5}>
          <SvgArrowLeft width={24} height={24} />
        </TouchableOpacity>
      </View>

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
        />

        <View>
          <TextInput
            style={[styles.textInput, { marginTop: 16, paddingLeft: 28 }]}
            placeholder="Місцевість..."
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

      <View style={styles.toolBar}>
        <TouchableOpacity activeOpacity={0.5}>
          <SvgTrash width={70} height={40} />
        </TouchableOpacity>
      </View>
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

  toolBar: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
});

export default PostsPublicationsCreate;
