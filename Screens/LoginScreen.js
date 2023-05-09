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
        .catch((error) => setError(true));
};
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        navigation.replace("TabNavigation");
      }
    });
  }, []);

  
  // async function playSound() {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../assets/Sounds/Alert.mp3")
  //   );
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

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
            // onPress={loginAction}
          />
          {/* <Button
        title="Play Sound"
        onPress={playSound}
        touchSoundDisabled={true}
      /> */}
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
          <View style={styles.subInfoContainer}>
            <TouchableOpacity onPress={() => setPirvacyModalVisible(true)}>
              <Text style={styles.subInfoContainerText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTermsModalVisible(true)}>
              <Text style={styles.subInfoContainerText}>Terms of use</Text>
            </TouchableOpacity>
          </View>

          <Modal visible={privacyModalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>
                Privacy Policy for Arabic Learning App: At [App Name], we take
                the privacy of our users very seriously. This Privacy Policy
                outlines the types of personal information we may collect and
                how we use that information. Personal Information: We may
                collect personal information from users such as name, email
                address, and other relevant contact details. This information is
                collected solely for the purpose of providing our language
                learning services and will not be shared with any third party
                without the user's express consent. Usage Data: We may collect
                usage data from our users, such as the user's IP address, device
                type, and location information. This information is collected
                solely for the purpose of improving our services and user
                experience. Security: We take appropriate security measures to
                protect the personal information of our users. However, no
                method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
                Updates: This Privacy Policy may be updated from time to time.
                Users will be notified of any changes via email or through the
                application. Contact: If you have any questions or concerns
                regarding our Privacy Policy, please contact us at [Contact
                Email]. By using the [App Name] application, you agree to the
                terms of this Privacy Policy.
              </Text>
              <TouchableOpacity
                onPress={() => setPirvacyModalVisible(!privacyModalVisible)}
              >
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal visible={termsModalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <ScrollView>
                <Text style={styles.modalText}>
                  Terms of Use Welcome to the Arabic Learning App. By accessing
                  or using our app, you agree to comply with and be bound by the
                  following terms and conditions of use. Please read these terms
                  carefully before using the app. Acceptance of Terms By
                  accessing or using the Arabic Learning App, you agree to these
                  terms and conditions of use, all applicable laws and
                  regulations, and agree that you are responsible for compliance
                  with any applicable local laws. If you do not agree with any
                  of these terms, you are prohibited from using or accessing
                  this site. Intellectual Property Rights The Arabic Learning
                  App and its original content, features, and functionality are
                  owned by the developer and are protected by international
                  copyright, trademark, patent, trade secret and other
                  intellectual property laws. Use License Permission is granted
                  to temporarily download one copy of the Arabic Learning App
                  for personal, non-commercial transitory viewing only. This is
                  the grant of a license, not a transfer of title, and under
                  this license, you may not: modify or copy the materials; use
                  the materials for any commercial purpose, or for any public
                  display (commercial or non-commercial); attempt to decompile
                  or reverse engineer any software contained in the app; remove
                  any copyright or other proprietary notations from the
                  materials; or transfer the materials to another person or
                  "mirror" the materials on any other server. This license shall
                  automatically terminate if you violate any of these
                  restrictions and may be terminated by the developer at any
                  time. Upon terminating your viewing of these materials or upon
                  the termination of this license, you must destroy any
                  downloaded materials in your possession, whether in electronic
                  or printed format. Disclaimer The materials on the Arabic
                  Learning App are provided on an 'as is' basis. The developer
                  makes no warranties, expressed or implied, and hereby
                  disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights. Limitations In no event shall the developer be
                  liable for any damages (including, without limitation, damages
                  for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  the Arabic Learning App. Revisions and Errata The materials
                  appearing on the Arabic Learning App may include technical,
                  typographical, or photographic errors. The developer does not
                  warrant that any of the materials on its app are accurate,
                  complete, or current. Links The Arabic Learning App has not
                  reviewed all of the sites linked to its app and is not
                  responsible for the contents of any such linked site. The
                  inclusion of any link does not imply endorsement by the
                  developer of the site. Use of any such linked website is at
                  the user's own risk. Governing Law These terms and conditions
                  are governed by and construed in accordance with the laws of
                  [insert country] and you irrevocably submit to the exclusive
                  jurisdiction of the courts in that State or location. By using
                  the Arabic Learning App, you acknowledge that you have read
                  these terms and conditions of use and agree to be bound by
                  them.
                </Text>
              </ScrollView>
              <TouchableOpacity
                onPress={() => setTermsModalVisible(!termsModalVisible)}
              >
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
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
