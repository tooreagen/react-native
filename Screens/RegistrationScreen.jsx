import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../Components/Button";
import SvgAvatarAdd from "../assets/icons/add.svg";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [focusedFields, setFocusedFields] = useState({
    login: false,
    email: false,
    password: false,
  });

  const initialState = { login: "", email: "", password: "" };

  const [userData, setUserData] = useState(initialState);
  const [passHide, setPassHide] = useState(true);

  const handleFocus = (field) => {
    setFocusedFields({ [field]: true });
  };

  const handleBlur = (field) => {
    setFocusedFields({ [field]: false });
  };

  const onRegister = () => {
    console.log(userData);
    setUserData(initialState);
    setPassHide(true);
    Keyboard.dismiss();
  };

  const onPassHide = () => {
    setPassHide(!passHide);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/background.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.registerPage}>
            <View style={styles.avatar}>
              <SvgAvatarAdd style={styles.avatarSvg} width={25} height={25} />
            </View>
            <Text style={styles.textHeading}>Реєстрація</Text>

            <KeyboardAvoidingView
              behavior={"height"}
              style={{
                marginBottom:
                  (focusedFields.email ||
                    focusedFields.password ||
                    focusedFields.login) &&
                  -120,
              }}
            >
              <TextInput
                value={userData.login}
                onChangeText={(value) =>
                  setUserData((prevState) => ({ ...prevState, login: value }))
                }
                style={[
                  styles.textInput,
                  focusedFields.login && styles.textInputFocused,
                  { marginTop: 33 },
                ]}
                placeholder="Логін"
                placeholderTextColor={"#bdbdbd"}
                onFocus={() => handleFocus("login")}
                onBlur={() => handleBlur("login")}
              />
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
                    setUserData((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
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
              <ButtonComponent title="Зареєструватися" onPress={onRegister} />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.signInText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  registerPage: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
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

  avatarSvg: {
    position: "absolute",
    bottom: 14,
    right: -12,
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
    paddingBottom: 16,
    textAlign: "center",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
  },
});

export default RegistrationScreen;
