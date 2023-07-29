import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhotoItem from "../Components/PhotoItem";
import SvgAvatarAdd from "../assets/icons/add.svg";
import SvgAvatarRemove from "../assets/icons/remove.svg";
import SvgLogOut from "../assets/icons/log-out.svg";
import { selectAllPosts } from "../redux/posts/postsSelectors";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  //   const navigation = useNavigation();
  const allPosts = useSelector(selectAllPosts);

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.backgroundImage}
    >
      <View></View>
      <View style={styles.profileScreen}>
        <View style={styles.avatar}>
          {true ? (
            <SvgAvatarRemove style={styles.avatarSvg} width={25} height={25} />
          ) : (
            <SvgAvatarAdd style={styles.avatarSvg} width={25} height={25} />
          )}
        </View>

        <TouchableOpacity style={styles.svgLogOut} activeOpacity={0.5}>
          <SvgLogOut width={24} height={24} />
        </TouchableOpacity>

        <Text style={styles.textHeading}>Natali Romanova</Text>

        <FlatList
          style={styles.photosList}
          data={allPosts}
          renderItem={({ item }) => (
            <PhotoItem
              key={item.id}
              url={item.photo}
              title={item.title}
              numComments={0}
              likes={0}
              place={item.place}
              location={item.location}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  profileScreen: {
    flex: 0.8,
    padding: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  avatar: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#f6f6f6",
    width: 120,
    height: 120,
    top: -60,
    borderRadius: 16,
  },

  avatarSvg: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },

  svgLogOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },

  textHeading: {
    marginTop: 92,
    fontFamily: "RobotoMedium",
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.3,
    color: "#212121",
  },

  photosList: {
    marginTop: 32,
    marginBottom: 45,
  },
});

export default ProfileScreen;
