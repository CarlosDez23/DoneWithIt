import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        i love React Native! This is my first React Native App. Here's some
        text.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    //Podemos utilizar fontFamily pero dependerá de la plataforma -> expo custom fonts
    fontFamily: "Roboto",
    //Cursiva
    fontStyle: "italic",
    //Peso de la fuente cuanto más, más negrita
    fontWeight: "600",
    //Color
    color: "tomato",
    //Para poner letra en mayúscula
    textTransform: "capitalize",
    //Poner una línea debajo o atravesada
    textDecorationLine: "underline",
    //Alignment
    textAlign: "justify",
    //Lineheight --> separación entre líneas dada por la altura que le demos a las misas
    lineHeight: 60,
  },
});
