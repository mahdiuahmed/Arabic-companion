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
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [sound, setSound] = useState();
  const [privacyModalVisible, setPirvacyModalVisible] = useState(false);
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  
  const signin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => alert(error.message));
};
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        navigation.replace("TabNavigation");
      }
    });
  }, []);

  

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
          <Text style={styles.subTitle}>LOG IN</Text>
          {error ? (
            <Text style={styles.subTitle}>LOG IN</Text>
          ): null}
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
            title="LOG IN"
            onPress={signin}
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
          
          />
    
          <Button
            title="REGISTER"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            type="outline"
            buttonStyle={{
              borderWidth: 5,
              borderColor: "#13947d",
              borderRadius: 8,
            }}
            titleStyle={{
              fontFamily: "poppinsRegular",
              fontSize: 16,
              color: "#262626",
            }}
            containerStyle={{
              width: "40%",
              marginVertical: 4,
            }}
            onPress={() => navigation.navigate("RegisterScreen")}
          />
  
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


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
  button: {
    backgroundColor: "#20AE7C",
    width: "80%",
    marginTop: 16,
    borderRadius: 8,
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
