import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
//Otra implementación para separar código de plataformas es esta, un archivo por cada plataforma
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

//Si utilizamos export default no podemos utilizar llaves en la importación
export default AppText;
