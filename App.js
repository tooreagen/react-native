import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/images/background.jpg")}
            style={styles.backgroundImage}
          >
              <RegistrationScreen />
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default App;
