import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { auth } from "../Firebase";
import { Button, Input } from "@rneui/themed";
import GlobalStyles from "../utils/GlobalStyles";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createUserWithEmailAndPassword } from "firebase/auth/react-native";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sound, setSound] = useState();


  const register = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        user.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => alert(error.message));
  };
  
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Sounds/Alert.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleLogin = () => {
    // TODO: Implement Firebase authentication logic here
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../assets/Images/Icon-01.png")}
          />
          <Text style={styles.title}>ARABIC COMPANION</Text>
          <Text style={styles.subTitle}>REGISTER AN ACCOUNT</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Name"
              leftIcon={<Icon name="person" size={24} />}
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="E-mail Address"
              leftIcon={<Icon name="email" size={24} />}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Password"
              leftIcon={<Icon name="lock" size={24} />}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <Button
            title="REGISTER"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "#13947d",
              borderRadius: 8,
            }}
            titleStyle={{ fontFamily: "poppinsRegular", fontSize: 16 }}
            containerStyle={{
              width: "40%",
              marginVertical: 4,
            }}
            onPress={register}
          />
          {/* <Button
        title="Play Sound"
        onPress={playSound}
        touchSoundDisabled={true}
      /> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// #0b7e7f,#13947d,#1ba37d,#20ae7c,#35bc88

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontFamily: "poppinsBold",
    fontSize: 27,
    color: "#0B7E7F",
    marginBottom: 8,
  },
  subTitle: {
    fontFamily: "poppinsRegular",
    color: "#13947d",
    fontSize: 21,
    marginBottom: 32,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 4,
    width: "80%",
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  input: {
    paddingLeft: 8,
    fontFamily: "poppinsRegular",
    display: "flex",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  subInfoContainer: {
    marginVertical: 32,
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  subInfoContainerText: {
    fontFamily: "poppinsRegular",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 20,
  },
  modalTitle: {
    color: "#0b7e7f",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    color: "#13947d",
    fontSize: 14,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#1ba37d",
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default LoginScreen;
