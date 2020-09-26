import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox}>
        <View style={styles.goldBox}></View>
      </View>
      <View style={styles.tomatoBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  //El padding es el espacio dentro del componente y el margin es el espacio fuera del componente
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blueBox: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    //Si queremos meter espacio dentro de la caja azul lo tenemos que hacer con el padding
    padding: 20,
    paddingHorizontal: 10,
    paddingLeft: 30,
  },
  goldBox: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
  },
  tomatoBox: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    //Para dar espacio entre esta y la caja azul utilizamos Margin
    margin: 20,
    //Igualmente tenemos margen vertical, horizontal, al a izquierda, a la derecha...
  },
});
