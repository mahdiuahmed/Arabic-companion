import { StyleSheet, Text, View, StatusBar} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import db from "../Firebase";

const LoginScreen = () => {
  // const collectionRef = dbcollection('users');

  //     collectionRef.get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((documentSnapshot) => {
  //       const data = documentSnapshot.data();
  //       console.log(data); // Log the data to the console
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error); // Log any errors to the console
  //   });

  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc("ZjpKXuAGhpeU0fBogQ8C")
      .onSnapshot((documentSnapshot) => {
        const info = documentSnapshot.data();
        setData(data);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{data.first}</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
