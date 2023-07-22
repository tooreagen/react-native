import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import SvgLogOut from "../assets/icons/log-out.svg";
import SvgArrowLeft from "../assets/icons/arrow-left.svg";

const Footer = (props) => {
  const { heading, backIconActive, logOutIconActive } = props;

  return (
    <View style={styles.footer}>
      <Text style={styles.textHeading}>{heading}</Text>
      {logOutIconActive && (
        <TouchableOpacity style={styles.svgLogOut} activeOpacity={0.5}>
          <SvgLogOut width={24} height={24} />
        </TouchableOpacity>
      )}

      {backIconActive && (
        <TouchableOpacity style={styles.svgArrowLeft} activeOpacity={0.5}>
          <SvgArrowLeft width={24} height={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

  svgLogOut: {
    position: "absolute",
    top: 10,
    right: 16,
  },
});

export default Footer;