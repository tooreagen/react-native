import React from "react";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "PostsScreen") {
            return (
              <Ionicons
                style={{ borderRadius: 50 }}
                backgroundColor={focused && "#FF6C00"}
                paddingLeft={23}
                paddingRight={23}
                paddingTop={8}
                paddingBottom={8}
                name={"grid-outline"}
                size={24}
                color={focused ? "#ffffff" : "#212121"}
              />
            );
          } else if (route.name === "CreatePostsScreen") {
            return (
              <Ionicons
                style={{ borderRadius: 50 }}
                backgroundColor={focused && "#FF6C00"}
                paddingLeft={23}
                paddingRight={23}
                paddingTop={8}
                paddingBottom={8}
                name={"add-outline"}
                size={24}
                color={focused ? "#ffffff" : "#212121"}
              />
            );
          } else if (route.name === "ProfileScreen") {
            return (
              <Ionicons
                style={{ borderRadius: 50 }}
                backgroundColor={focused && "#FF6C00"}
                paddingLeft={23}
                paddingRight={23}
                paddingTop={8}
                paddingBottom={8}
                name={"person-outline"}
                size={24}
                color={focused ? "#ffffff" : "#212121"}
              />
            );
          }
        },
        tabBarStyle: styles.toolBar,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        createBottomTabNavigator
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" }
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  toolBar: {
    height: 70,
  },
});

export default HomeScreen;
