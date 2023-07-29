import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgComments from "../assets/icons/comments.svg";
import SvgLikes from "../assets/icons/likes.svg";
import SvgMapPin from "../assets/icons/map-pin.svg";

const PhotoItem = (props) => {
  const navigation = useNavigation();
  const { url, title, numComments, likes, place } = props;

  return (
    <View style={styles.photoContainer}>
      <Image style={styles.photo} source={{ uri: url }} />

      <Text style={styles.photoTitle}>{title}</Text>

      <View style={styles.photoInfoBlock}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.commentsBlock}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("CommentsScreen")}
            >
              <SvgComments width={24} height={24} />
            </TouchableOpacity>
            <Text style={styles.infoText}>{numComments}</Text>
          </View>

          <View style={styles.likesBlock}>
            <SvgLikes width={24} height={24} />
            <Text style={styles.infoText}>{likes}</Text>
          </View>
        </View>

        <View style={styles.locationBlock}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("MapScreen")}
          >
            <SvgMapPin width={24} height={24} />
          </TouchableOpacity>
          <Text style={[styles.infoText, { textDecorationLine: "underline" }]}>
            {place}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    marginTop: 32,
  },

  photo: {
    height: 240,
    borderRadius: 8,
  },

  photoTitle: {
    marginTop: 8,
    marginBottom: 8,
    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },

  photoInfoBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  commentsBlock: {
    flexDirection: "row",
    gap: 6,
  },

  likesBlock: {
    flexDirection: "row",
    gap: 6,
    marginLeft: 24,
  },

  locationBlock: {
    flexDirection: "row",
    gap: 6,
  },

  infoText: {
    color: "#212121",
    fontFamily: "RobotoRegular",
    fontSize: 16,
  },
});

export default PhotoItem;
