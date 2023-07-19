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
import SvgFeatherIconGrid from "../assets/icons/feather-icon-grid.svg";
import SvgFeatherIconUser from "../assets/icons/feather-icon-user.svg";
import SvgToolbarButtonAdd from "../assets/icons/feather-icon-add.svg";

//delete array
const photosArr = [
  {
    id: "1",
    url: "https://cdn.pixabay.com/photo/2022/05/28/21/44/carpathians-7228042_1280.jpg",
    title: "Українські Карпати",
    numComments: 10,
    likes: 5,
    location: "Ukraine",
  },
  {
    id: "2",
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    title: "Захід сонця",
    numComments: 3,
    likes: 27,
    location: "Ukraine",
  },
  {
    id: "3",
    url: "https://cdn.pixabay.com/photo/2013/06/30/18/56/butterfly-142506_1280.jpg",
    title: "Метелик",
    numComments: 78,
    likes: 169,
    location: "India",
  },
  {
    id: "4",
    url: "https://cdn.pixabay.com/photo/2012/12/17/03/59/moose-70254_1280.jpg",
    title: "Лось",
    numComments: 32,
    likes: 1023,
    location: "Azerbaijan",
  },
];

const ProfileScreen = () => {
  //   const navigation = useNavigation();

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
          data={photosArr}
          renderItem={({ item }) => (
            <PhotoItem
              key={item.id}
              url={item.url}
              title={item.title}
              numComments={item.numComments}
              likes={item.likes}
              location={item.location}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.toolBar}>
          <TouchableOpacity activeOpacity={0.5} style={styles.InActiveButton}>
            <SvgFeatherIconGrid width={24} height={24} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} style={styles.activeButton}>
            <SvgFeatherIconUser width={24} height={24} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} style={styles.InActiveButton}>
            <SvgToolbarButtonAdd width={40} height={40} />
          </TouchableOpacity>
        </View>
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

export default ProfileScreen;
