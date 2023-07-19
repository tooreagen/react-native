import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import SvgArrowLeft from "../assets/icons/arrow-left.svg";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.textHeading}>Карта</Text>
        <TouchableOpacity style={styles.svgArrowLeft} activeOpacity={0.5}>
          <SvgArrowLeft width={24} height={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text>Карта</Text>
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
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#b8b8b8",
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
