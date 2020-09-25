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
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

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
  //Nos devuelve un objeto con las dimensiones de la pantalla
  console.log(Dimensions.get("screen"));

  //Utilizando useDimensions pillamos las dimensiones independientemente de la orientación
  console.log(useDimensions());

  //Con desestructuración pillamos la propiedad landscape del objeto que devuelve el useDevice..abs
  const { landscape } = useDeviceOrientation();
  /*
  Podemos hacer cualquier objeto touchable
  */

  return (
    /*
        <SafeAreaView style={styles.container}>
        AQUÍ TODO LO QUE VAMOS HACIENDO

        <Text onPress={handlePress}>Hola react native :)</Text>
       Para imágenes locales en la carpeta Assets 
      <Image source={require("./assets/icon.png")} />

       Hacemos la imagen touchable, los componentes
      touchabel son los que tienen el evento onPress
      por eso tenemos que envolver el componente que 
      queremos hacer touchable.
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
      Uso de botón y alert. A alert le pasamos el titulo,mensaje y un array
      de objetos en el que cada objeto es una de las opciones. Estos objetos tienen
      su propio método onPress, que podemos capturar como un evento y manejar
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
      <View
        style={{
          backgroundColor: "dodgerblue",
          //Utilizamos porcentajes en cuanto a la pantalla
          //Si ponemos 50% en width, será de ancho la mitad de la pantalla
          width: "100%",
          //Le estamos diciendo que cuando landscape se cumpla ponga la altura al 100
          height: landscape ? "100%" : "30%",
        }}
      ></View>

      </SafeAreaView>
        */

    <View
      style={{
        backgroundColor: "#fff",
        //Flex 1 la vista coje todo el espacio libre disponible y así
        //Si pones 0.5 entonces es la mitad de la pantalla
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
        }}
        //Este es el contenedor principal, que tiene dentro otras 3 vistas
        //Las 3 vistas tienen flex 1 por lo que ocuparan cada una un tercio
        //de la pantalla, si aumentamos alguna a 2, la pantalla se dividirá en
        //cuatro partes, ocupando la vista aumentada el doble de lo que
        //ocupan las otras 2 ya que --> 2 + 1 + 1 = 4
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      ></View>
    </View>
  );
}

//Utilizar siempre esto para los estilos, siempre definirlos aquí
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    /*Propiedad ajustada dinámicamente --> si la plataforma es android entonces el padding top
    sera de 20, si no de 0. Utiliza el operador ternario (condicion) ? si se cumple : si no se cumple*/
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
