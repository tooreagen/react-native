import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SvgButtonSend from "../assets/icons/buttonSend.svg";
import CommentsItem from "../Components/CommentsItem";
import Footer from "../Components/Footer";

const screenHeight = Dimensions.get("window").height;

//delete array
const commentsArr = [
  {
    id: "1",
    avatar: "https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594",
    commentText:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    dateTime: "09 червня, 2020 | 08:40",
  },
  {
    id: "2",
    avatar: "https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594",
    commentText:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    dateTime: "09 червня, 2020 | 08:40",
  },
  {
    id: "3",
    avatar: "https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594",
    commentText: "Thank you! That was very helpful!",
    dateTime: "09 червня, 2020 | 08:40",
  },
  {
    id: "4",
    avatar: "https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594",
    commentText:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    dateTime: "09 червня, 2020 | 08:40",
  },
  {
    id: "5",
    avatar: "https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594",
    commentText:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    dateTime: "09 червня, 2020 | 08:40",
  },
  {
    id: "6",
    avatar: "https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594",
    commentText: "Thank you! That was very helpful!",
    dateTime: "09 червня, 2020 | 08:40",
  },
];

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Footer heading={"Коментарі"} backIconActive={true} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <View style={styles.photoWrapper}>
            <Image />
          </View>
          <FlatList
            style={styles.commentsList}
            data={commentsArr}
            renderItem={({ item, index }) => (
              <CommentsItem
                key={item.id}
                index={index}
                avatar={item.avatar}
                comment={item.commentText}
                dateTime={item.dateTime}
              />
            )}
            keyExtractor={(item) => item.id}
          />

          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Коментувати..."
              placeholderTextColor={"#bdbdbd"}
            />
            <TouchableOpacity activeOpacity={0.5}>
              <SvgButtonSend style={styles.svgButtonSend} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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

  photoWrapper: {
    height: screenHeight * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },

  commentsList: {
    marginTop: 32,
    marginBottom: 32,
  },

  textInput: {
    padding: 16,
    fontFamily: "InterMedium",
    fontSize: 16,
    color: "#212121",

    backgroundColor: "#f6f6f6",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 50,
  },

  svgButtonSend: {
    position: "absolute",
    bottom: 14,
    right: 8,
  },
});

export default CommentsScreen;
