import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Footer from "../Components/Footer";
import PhotoItem from "../Components/PhotoItem";
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserLogin,
} from "../redux/auth/authSelectors";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../redux/posts/postsOperations";
import { selectAllPosts } from "../redux/posts/postsSelectors";

const PostsScreen = () => {
  const email = useSelector(selectUserEmail);
  const login = useSelector(selectUserLogin);
  const allPosts = useSelector(selectAllPosts);
  const avatar = useSelector(selectUserAvatar);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <View style={styles.container}>
      <Footer
        heading={"Публікації"}
        backIconActive={false}
        logOutIconActive={true}
      />

      <View style={styles.main}>
        <View style={styles.userCard}>
          <Image source={{ uri: avatar }} />
          <View>
            <Text style={styles.userCard.userName}>{login}</Text>
            <Text style={styles.userCard.userEmail}>{email}</Text>
          </View>
        </View>

        <FlatList
          style={styles.photosList}
          data={allPosts}
          renderItem={({ item }) => (
            <PhotoItem
              key={item.id}
              id={item.id}
              url={item.photo}
              title={item.title}
              likes={0}
              place={item.place}
              location={item.location}
            />
          )}
          keyExtractor={(item) => item.id}
        />
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

  photosList: {
    marginTop: 32,
  },
});

export default PostsScreen;
