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
    //Vamos a aplicar bordes
    //Grosor del borde
    borderWidth: 10,
    //Color del borde
    borderColor: "royalblue",
    //Borde redondeado
    borderRadius: 50,

    //Podemos aplicar el radius a cualquier parte de la vista
    /*
      borderTopWidth: 20,
      borderTopLeftRadius: 40,
      */

    //Para hacer un círculo tenemos que poner el valor de borderRadius
    //a la mitad del tamaño de nuestra vista en este caso 50 (100x100)
    //borderRadius: 50
  },
});
