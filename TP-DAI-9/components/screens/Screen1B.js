import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../../styles';

export default function Screen1B({ route, navigation }) {
  const { nombre, telefono } = route.params || {};
  return (
    <View style={styles.containerRed}>
      <Text style={styles.text}>Pantalla 1.2</Text>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Teléfono: {telefono}</Text>
      <TextInput placeholder="Comentario" style={styles.input} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}
