import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import ButtonComponent from "../Components/Button";

const LoginScreen = () => {
  const [focusedFields, setFocusedFields] = useState({
    email: false,
    password: false,
  });

  const initialState = { email: "", password: "" };

  const [userData, setUserData] = useState(initialState);
  const [passHide, setPassHide] = useState(true);

  const handleFocus = (field) => {
    setFocusedFields({ [field]: true });
  };

  const handleBlur = (field) => {
    setFocusedFields({ [field]: false });
  };

  const onLogin = () => {
    console.log(userData);
    setUserData(initialState);
    setPassHide(true);
    Keyboard.dismiss();
  };

  const onPassHide = () => {
    setPassHide(!passHide);
  };

  return (
    <View style={styles.loginPage}>
      <Text style={styles.textHeading}>Увійти</Text>

      <KeyboardAvoidingView
        behavior={"height"}
        style={{
          marginBottom: (focusedFields.email || focusedFields.password) && -110,
        }}
      >
        <TextInput
          value={userData.email}
          onChangeText={(value) =>
            setUserData((prevState) => ({ ...prevState, email: value }))
          }
          style={[
            styles.textInput,
            focusedFields.email && styles.textInputFocused,
            { marginTop: 16, marginBottom: 16 },
          ]}
          placeholder="Адреса електронної пошти"
          placeholderTextColor={"#bdbdbd"}
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
        />

        <View style={styles.passwordInputBox}>
          <TextInput
            value={userData.password}
            onChangeText={(value) =>
              setUserData((prevState) => ({ ...prevState, password: value }))
            }
            style={[
              styles.textInput,
              focusedFields.password && styles.textInputFocused,
            ]}
            secureTextEntry={passHide}
            placeholder="Пароль"
            placeholderTextColor={"#bdbdbd"}
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
          />

          <TouchableOpacity
            style={styles.passwordShowBox}
            activeOpacity={0.5}
            onPress={onPassHide}
          >
            <Text style={styles.passwordShowText}>
              {passHide ? "Показати" : "Сховати"}
            </Text>
          </TouchableOpacity>
        </View>

        <ButtonComponent title="Увійти" onPress={onLogin} />

        <View style={styles.bottomText}>
          <Text style={styles.signInText}>Немає акаунту? </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text
              style={[styles.signInText, { textDecorationLine: "underline" }]}
            >
              Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
  },

  textHeading: {
    marginTop: 32,
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
    backgroundColor: "#f6f6f6",

    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },

  textInputFocused: {
    borderColor: "#FF6C00",
    borderWidth: 1,
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

  bottomText: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default LoginScreen;
