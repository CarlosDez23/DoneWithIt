import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
//Añadiendo iconos, importamos el paquete que queramos y luego ajustamos propiedades en el icono
export default function App() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
