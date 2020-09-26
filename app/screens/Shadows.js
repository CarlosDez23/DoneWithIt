import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blueBox: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    //La propiedad elevation es la que da el efecto de sombra en Android en ios hay más opciones
    elevation: 20,
  },
});
