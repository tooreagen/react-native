import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView, FlatList } from "react-native";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J24565",
    title: "React Native",
  },
  {
    id: "45k6-j54k-4j456th",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43456rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j24555",
    title: "React",
  },
  {
    id: "LG16-ant5-054365J25",
    title: "React Native",
  },
  {
    id: "45k6-j54k-4809-jth",
    title: "HTML",
  },
  {
    id: "42453116-jf9768k5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt43655-4j76855",
    title: "React",
  },
  {
    id: "L436G16-36ant5-0J25",
    title: "React Native",
  },
  {
    id: "44365k6-j54436k-4jth",
    title: "HTML",
  },
  {
    id: "416516-jfk4655-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j45655",
    title: "React",
  },
  {
    id: "LG16-ant5-0456J25",
    title: "React Native",
  },
  {
    id: "45k6-j54k-4425jth",
    title: "HTML",
  },
  {
    id: "4435116-jf4253k5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4435j55",
    title: "React",
  },
  {
    id: "LG45316-ant5-0J143525",
    title: "React Nat2ive",
  },
];

export default function App() {
  const [courses, setCourses] = useState(COURSES);

  return (
    <SafeAreaView style={styles.container}>
       <FlatList 
        data={courses}
        renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  text: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 700,
  }
});
