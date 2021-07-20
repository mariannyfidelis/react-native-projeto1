import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  let nome="Mariana";

  return (
    <View style={styles.container}>
      <Text style={{fontSize:25, color:`#FF00AA`}}>Primeiro Projeto no React {nome}</Text>
      <Text style={{fontSize:30, color: `#00FFFF`}}>Marianny</Text>
      <StatusBar style="auto" />

      <Image 
        source={{uri:"https://i.pinimg.com/originals/e2/47/28/e24728de466d0786868494ac94d61aa5.jpg"}}
        style={{height:300, width:300}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
