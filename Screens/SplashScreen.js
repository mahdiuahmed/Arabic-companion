// import { StyleSheet, Text, View, Image } from "react-native";
// import React, { useState } from "react";
// import { navigation } from "@react-navigation/native";


// const SplashScreen = ({ navigation }) => {
//   const [timePassed, setTimePassed] = useState(false);

//   setTimeout(function () {
//     setTimePassed(true);
//   }, 3000);

//   if (!timePassed) {
//     return (
//       <View style={styles.splash}>
//         <Image
//           style={styles.splashScreenLogo}
//           source={require("../assets/Images/App Icon-01.png")}
//         />
//       </View>
//     );
//   }
//   navigation.navigate("LoginScreen");
//   return null;
// };

// const styles = StyleSheet.create({
//   splash: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 20,
//   },
//   splashScreenLogo: {
//     width: "100%"
//   }
// });

// export default SplashScreen;
