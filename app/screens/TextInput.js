import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

//Sin llaves porque hemos utilizado import default
import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";

export default function App() {
  //Utilizamos el estado para tener el valor de nombre y cambiarlo cuando este cambie
  //En el evento onChangeText
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <View styles={styles.container}>
        <Text>{firstName}</Text>
        <TextInput
          style={styles.input}
          placeholder="First name"
          onChangeText={(text) => setFirstName(text)}
          maxLength={5}
          keyboardType="numeric"
          secureTextEntry
        ></TextInput>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
