import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../../styles';

export default function Screen2B({ navigation }) {
  return (
    <View style={styles.containerBlue}>
      <Text style={styles.text}>Pantalla 2.2</Text>
      <TextInput placeholder="Filtrar resultados..." style={styles.input} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}