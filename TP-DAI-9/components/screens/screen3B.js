import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { styles } from '../../styles';

export default function Screen3B() {
  return (
    <View style={styles.containerGreen}>
      <Text style={styles.text}>Pantalla 3.2</Text>
      <TextInput style={styles.input} placeholder="Modificar nombre" />
      <Button title="Guardar cambios" onPress={() => alert('Cambios guardados')} />
    </View>
  );
}