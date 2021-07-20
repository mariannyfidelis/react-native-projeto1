import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class App extends Component {
  render() {
    let nome = "Marianny";

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    });

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, color: `#FF00AA` }}>
          Primeiro Projeto no React
        </Text>
        <Text style={{ fontSize: 30, color: `#00FFFF` }}>Marianny</Text>
        <Text style={{ fontSize: 25, color: `#FF00AA` }}>
          Criado por: {nome}
        </Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/e2/47/28/e24728de466d0786868494ac94d61aa5.jpg",
          }}
          style={{ height: 300, width: 300 }}
        />

        <Jobs largura={200} altura={200} />
      </View>
    );
  }
}

export default App;

//Criando um componente por meio de classes
class Jobs extends Component {
  render() {
    let img =
      "https://i.pinimg.com/originals/e2/47/28/e24728de466d0786868494ac94d61aa5.jpg";
    return(
    <View>
      <Image
        source={{ uri: img }}
        style={{ width: this.props.largura, height: this.props.altura }}
      />
      <Text>Componente imagem !</Text>
    </View>);
  }
}
