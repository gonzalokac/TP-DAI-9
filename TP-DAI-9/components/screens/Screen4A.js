import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../../styles';

export default function Screen4A({ navigation }) {
  return (
    <View style={styles.containerYellow}>
      <Text style={styles.text}>Pantalla 4.1 - Más</Text>
      <TextInput placeholder="Agregar nota" style={styles.input} />
      <Button title="Ir a 4.2" onPress={() => navigation.navigate('Screen4B')} />
    </View>
  );
}