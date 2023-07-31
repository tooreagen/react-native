import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import SvgButtonSend from "../assets/icons/buttonSend.svg";
import CommentsItem from "../Components/CommentsItem";
import Footer from "../Components/Footer";
import { db } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import {
  selectUserLogin,
  selectUserId,
  selectUserAvatar,
} from "../redux/auth/authSelectors";
import { useEffect } from "react";
import { getAllComments } from "../redux/posts/postsOperations";
import { selectAllComments } from "../redux/posts/postsSelectors";

const screenHeight = Dimensions.get("window").height;

const CommentsScreen = ({ route }) => {
  const { postId, photoUrl } = route.params;
  const userName = useSelector(selectUserLogin);
  const userId = useSelector(selectUserId);
  const userAvatar = useSelector(selectUserAvatar);
  const allComments = useSelector(selectAllComments);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const createComment = async () => {
    try {
      const date = Date.now();
      await addDoc(collection(db, "posts", postId, "comments"), {
        id: date,
        comment,
        userName,
        userId,
        userAvatar,
        date,
      });
    } catch (error) {
      console.log(error);
    }
    setComment("");
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(getAllComments(postId));
  }, []);

  return (
    <View style={styles.container}>
      <Footer heading={"Коментарі"} backIconActive={true} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <View style={styles.photoWrapper}>
            <Image source={{ uri: photoUrl }} />
          </View>
          <FlatList
            style={styles.commentsList}
            data={allComments}
            renderItem={({ item, index }) => (
              <CommentsItem
                key={item.id}
                index={index}
                avatar={item.userAvatar}
                comment={item.comment}
                dateTime={item.date}
              />
            )}
            keyExtractor={(item) => item.id}
          />

          <View>
            <TextInput
              value={comment}
              onChangeText={(value) => setComment(value)}
              style={styles.textInput}
              placeholder="Коментувати..."
              placeholderTextColor={"#bdbdbd"}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={createComment}>
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
