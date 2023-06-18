import React from "react";
import { TouchableHighlight, StyleSheet, Text } from "react-native";

const ButtonComponent = (props) => {
  const { title } = props;
  return (
    <TouchableHighlight style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
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
