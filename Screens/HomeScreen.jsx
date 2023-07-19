import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import SvgLogOut from "../assets/icons/log-out.svg";
import SvgFeatherIconGrid from "../assets/icons/feather-icon-grid.svg";
import SvgFeatherIconUser from "../assets/icons/feather-icon-user.svg";
import SvgToolbarButtonAdd from "../assets/icons/feather-icon-add.svg";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.textHeading}>Публікації</Text>
        <TouchableOpacity style={styles.svgLogOut} activeOpacity={0.5}>
          <SvgLogOut width={24} height={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.userCard}>
          <Image source={require("../assets/images/userAvatar.jpg")} />
          <View>
            <Text style={styles.userCard.userName}>Natali Romanova</Text>
            <Text style={styles.userCard.userEmail}>email@example.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.toolBar}>
        <TouchableOpacity activeOpacity={0.5} style={styles.InActiveButton}>
          <SvgFeatherIconGrid width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.activeButton}>
          <SvgToolbarButtonAdd style={{stroke: "#ffffff"}} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.InActiveButton}>
          <SvgFeatherIconUser width={24} height={24} />
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

  textHeading: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
  },

  svgLogOut: {
    position: "absolute",
    top: 10,
    right: 16,
  },

  userCard: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",

    userName: {
      color: "#212121",
      fontFamily: "RobotoBold",
      fontSize: 13,
    },

    userEmail: {
      color: "#212121cc",
      fontFamily: "RobotoRegular",
      fontSize: 11,
    },
  },

  toolBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 70,
    borderTopWidth: 1,
    borderColor: "#0000004c",
  },

  activeButton: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },

  InActiveButton: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
