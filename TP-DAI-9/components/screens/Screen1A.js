import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../../styles';

export default function Screen1A({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={styles.containerRed}>
      <Text style={[styles.text, { fontSize: 20, fontWeight: 'bold' }]}>Pantalla 1.1 - Inicio</Text>
      <TextInput placeholder="Nombre" style={styles.input} onChangeText={setNombre} />
      <TextInput placeholder="Teléfono" style={styles.input} keyboardType="phone-pad" onChangeText={setTelefono} />
      <View style={styles.button}>
        <Button title="Ir a 1.2" onPress={() => navigation.navigate('Screen1B', { nombre, telefono })} />
      </View>
    </View>
  );
}