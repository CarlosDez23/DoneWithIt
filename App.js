import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  //SafeAreaView añade padding arriba para asegurar que nuestro contenido
  //está en un área visible
  /*
    View es el elemento principal de react native, es un contenedor en el que
    dentro habrá más componentes. Funciona como un div de html
    */
  //El componente text se utiliza para mostrar texto
  //Evento al ser pulsado el texto
  const handlePress = () => console.log("Texto pulsado");
  //Las imágenes locales retornan un número que sirve como referencia
  console.log(require("./assets/icon.png"));
  /*
  Podemos hacer cualquier objeto touchable
  */

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hola react native :)</Text>
      {/* Para imágenes locales en la carpeta Assets 
      <Image source={require("./assets/icon.png")} />*/}

      {/* Hacemos la imagen touchable, los componentes
      touchabel son los que tienen el evento onPress
      por eso tenemos que envolver el componente que 
      queremos hacer touchable.*/}
      <TouchableOpacity onPress={() => console.log("Imagen tocada")}>
        <Image
          //Imagen con efectos y cargada de internet
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            //Con esto se carga de internet
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      {/*Uso de botón y alert. A alert le pasamos el titulo,mensaje y un array
      de objetos en el que cada objeto es una de las opciones. Estos objetos tienen
      su propio método onPress, que podemos capturar como un evento y manejar*/}
      <Button
        color="orange"
        title="Alert"
        onPress={() =>
          Alert.alert("Título", "Mensaje", [
            { text: "Sí", onPress: () => console.log("Sí") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
    </SafeAreaView>
  );
}

//Utilizar siempre esto para los estilos, siempre definirlos aquí
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    /*Propiedad ajustada dinámicamente --> si la plataforma es android entonces el padding top
    sera de 20, si no de 0. Utiliza el operador ternario (condicion) ? si se cumple : si no se cumple*/
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
