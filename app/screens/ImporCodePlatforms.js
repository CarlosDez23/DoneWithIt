import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Sin llaves porque hemos utilizado import default
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View style={styles.container}>
      <AppText> Hola React Native</AppText>
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
