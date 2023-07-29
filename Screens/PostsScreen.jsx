import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Footer from "../Components/Footer";
import { selectUserEmail, selectUserLogin } from "../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const PostsScreen = () => {
  const email = useSelector(selectUserEmail);
  const login = useSelector(selectUserLogin);
  
  return (
    <View style={styles.container}>
      <Footer
        heading={"Публікації"}
        backIconActive={false}
        logOutIconActive={true}
      />

      <View style={styles.main}>
        <View style={styles.userCard}>
          <Image source={require("../assets/images/userAvatar.jpg")} />
          <View>
            <Text style={styles.userCard.userName}>{login}</Text>
            <Text style={styles.userCard.userEmail}>{email}</Text>
          </View>
        </View>
      </View>
    </View>
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
});

export default PostsScreen;
