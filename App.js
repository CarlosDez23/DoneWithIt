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
        //Este es el contenedor principal, que tiene dentro otras 3 vistas
        //Las 3 vistas tienen flex 1 por lo que ocuparan cada una un tercio
        //de la pantalla, si aumentamos alguna a 2, la pantalla se dividirá en
        //cuatro partes, ocupando la vista aumentada el doble de lo que
        //ocupan las otras 2 ya que --> 2 + 1 + 1 = 4
        backgroundColor: "#fff",
        //Flex 1 la vista coje todo el espacio libre disponible y así
        //Si pones 0.5 entonces es la mitad de la pantalla
        flex: 1,
        flexDirection: "row",

        //row-reverse para ponerlo al revés (parte desde la esquina superior derecha)
        //column-reverse para ponerlo en columna desde abajo

        justifyContent: "center",
        //alineamos elemento entorno al eje primario, que está definido en la dirección
        //de flex. Si la dirección es horizontal, alineamos horizontalmente
        //si el flexDirection es column, alineamos en torno al eje vertical
        // tipos:
        // center --> en el centro del eje principal
        // flex-end --> al final del eje principal
        // flex-start --> al principo del eje principal
        // para distribuir el espacio con justifyContent:
        // space-around --> el espacio no se distribuye igual entre los items
        // space-evenly --> el espacio se distribuye igual entre los items
        // space-between --> el espacio se produce entre los items

        alignItems: "center",
        //Alineamos los itemos entorno al eje secundario, en este caso el vertical
        //porque la dirección del flex es row (horizontal)
        //tipos:
        // center --> en el centro del eje secundario
        // baseline --> alineamos los ítems conforme a su base
        // flex-end --> al final del eje secundario, en este caso como es vertical, abajo de la pantalla
        // flex-start --> al principio del eje secundario
        // stretch --> la vista ocupará todo el eje secundario

        // WRAPPING
        //flexWrap: "wrap",
        //Cuando utilizamos wrap, alignItems se comporta de una forma diferente
        //por lo que utilizamos align-content
        //alignContent: "center",
        //Align items dtermina el alineamiento de los items dentro de cada línea,
        //mientras que alignContent determina el alineamiento de TODO el contenido
        //solo se utiliza alignContent cuando utilizamos wrapping
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          //alignSelf: "flex-start",
          //Alignself funciona igual que alignItems (tiene las mismas propiedades)
          //pero solo posiciona el ítem que nosotros queramos, ya que con alignItems
          //movemos todos los ítems que haya dentro de un contenedor

          //flexBasis: 100,
          //Con esta propiedad damos altura (si el eje principal es el vertical) o anchura
          //(si el eje principal es el horizontal) a un elemento. Por lo que en este caso es
          //lo mismo que width : 100
          //flexGrow: 1,
          //FlexGrow --> es igual que flex

          //Si algo se está saliendo de la pantalla coje el elemento que más espacio esté ocupando
          //dentro del contenedor y lo adapta para que los elementos que estén fuera de la pantalla
          //sean visibles. Es lo mismo que establecer flex con un número negativo
          //flexShrink: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          //Con estas propiedades de top, left etc, movemos un ítem sin afectar a la posición
          //de los demás ítems. Esto es así porque en react native todos los elementos tienen
          //posicionamiento relativo por defecto
          //Propiedad del posicionamiento
          position: "relative",
          //Si la cambiamos a absoluta, se va a posicionar sobre el contenedor padre y los otros
          //elementos si que se van a mover a ocupar su espacio
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
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
