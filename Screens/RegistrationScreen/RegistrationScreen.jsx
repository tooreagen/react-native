import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Dimensions,
} from "react-native";
import ButtonComponent from "../../Components/Button";

const { screenWidth, screenHeight } = Dimensions.get("window");
const left = Number(screenWidth / 2);

const RegistrationScreen = () => {
  return (
    <>
      <View style={styles.background} />
      <View style={styles.registerPage}>
        <View style={styles.avatar}></View>
        <View >
          <Text style={styles.textHeading}>Реєстрація</Text>
          <TextInput
            style={[styles.textInput, { marginTop: 33 }]}
            placeholder="Логін"
          />
          <TextInput
            style={[styles.textInput, { marginTop: 16, marginBottom: 16 }]}
            placeholder="Адреса електронної пошти"
          />
          <View style={styles.passwordInputBox}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Пароль"
            />
            <TouchableHighlight style={styles.passwordShowBox}>
              <Text style={styles.passwordShowText}>Показати</Text>
            </TouchableHighlight>
          </View>
          <ButtonComponent title="Зареєструватися" />
          <Text style={styles.signInText}>Вже є акаунт? Увійти</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1.5,
  },

  registerPage: {
    flex: 3,
    padding: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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

  textHeading: {
    marginTop: 92,
    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },

  textInput: {
    padding: 16,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",

    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },

  passwordInputBox: {
    justifyContent: "center",
    marginBottom: 43,
  },

  passwordShowBox: {
    position: "absolute",
    right: 0,
    padding: 16,
  },
  passwordShowText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
  },
  signInText: {
    marginTop: 16,
    textAlign: "center",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
  },
});

export default RegistrationScreen;