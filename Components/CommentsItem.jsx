import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const CommentsItem = (props) => {
  const { index, avatar, comment, dateTime } = props;

  return (
    <View
      style={[
        styles.container,
        { flexDirection: index % 2 ? "row-reverse" : "row" },
      ]}
    >
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <View
        style={[
          styles.commentContainer,
          {
            borderTopLeftRadius: index % 2 ? 6 : 0,
            borderTopRightRadius: index % 2 ? 0 : 6,
          },
        ]}
      >
        <Text style={styles.commentText}>{comment}</Text>
        <Text
          style={[
            styles.commentDate,
            { textAlign: index % 2 ? "left" : "right" },
          ]}
        >
          {dateTime}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginBottom: 24,
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },

  commentContainer: {
    padding: 16,
    flex: 1,
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },

  commentText: {
    color: "#212121",
    fontFamily: "RobotoRegular",
    fontSize: 13,
    lineHeight: 18,
  },

  commentDate: {
    marginTop: 8,
    color: "#bdbdbd",
    fontFamily: "RobotoRegular",
    fontSize: 10,
  },
});

export default CommentsItem;
