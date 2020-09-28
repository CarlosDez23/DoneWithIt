import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { AppText } from "./app/components/AppText";

export default function App() {
  return (
    <View style={styles.container}>
      <AppText /*Podemos encapsular estilos de texto u otros ocmponentes*/>
        Hola react native
      </AppText>
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
