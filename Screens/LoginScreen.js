import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import db from "../Firebase";
import { Button, Input } from "@rneui/themed";
import GlobalStyles from "../utils/GlobalStyles";
import { Audio } from "expo-av";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sound, setSound] = useState();

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
    <View style={styles.container}>
      <Text style={styles.title}>ARABIC COMPANION</Text>
      <Text style={styles.subTitle}>LOG IN</Text>
      <Input
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        placeholder="كلمة المرور"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title="تسجيل الدخول"
        onPress={handleLogin}
        buttonStyle={styles.button}
      />
      <Button
        title="Play Sound"
        onPress={playSound}
        touchSoundDisabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontFamily: "my-font",
    fontSize: 24,
    color: "#0B7E7F",
    marginBottom: 32,
  },
  subTitle: {
    fontFamily: "my-font",
    fontSize: 16,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "80%",
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#20AE7C",
    width: "80%",
    marginTop: 16,
    borderRadius: 8,
  },
});

export default LoginScreen;
