import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "@rneui/themed";
import { auth } from "../Firebase";

const SettingsScreen = ({ navigation }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const logOut = () => {
    auth.signOut().then(() => {
      navigation.replace("LoginScreen");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Button onPress={logOut} style={styles.logoutButton}>
          Log Out
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    padding: 20,
  },
  item: {
    flexDirection: "row-reverse",
    alignItems: "center",
    margin: 16,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0b7e7f",
  },
  button: {
    backgroundColor: "#35bc88",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  logoutButton: {
    backgroundColor: "#54BAB9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    margin: 50,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#0b7e7f",
  },
  closeButton: {
    backgroundColor: "#ff4949",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default SettingsScreen;
