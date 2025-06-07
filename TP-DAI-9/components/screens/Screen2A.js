import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { styles } from '../../styles';

export default function Screen2A({ navigation }) {
  return (
    <View style={styles.containerBlue}>
      <Text style={styles.text}>Pantalla 2.1 - Buscar</Text>
      <TextInput placeholder="Buscar..." style={styles.input} />
      <Image source={{ uri: 'https://media.ambito.com/p/70ace7fdf095019b689122fec093c1d2/adjuntos/239/imagenes/041/307/0041307565/el-muro-de-los-lamentos-en-jerusalen-getty-images-archivo-1png.png' }} style={styles.image} />
      <Button title="Ir a 2.2" onPress={() => navigation.navigate('Screen2B')} />
    </View>
  );
}