import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ButtonComponent = (props) => {
  const { title, style, disabled } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && { backgroundColor: "#f6f6f6" },
        style,
      ]}
      disabled={disabled}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Text style={[styles.text, disabled && { color: "#bdbdbd" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  text: {
    textAlign: "center",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
});

export default ButtonComponent;
