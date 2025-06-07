import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../../styles';

export default function Screen3A({ navigation }) {
  return (
    <View style={styles.containerGreen}>
      <Text style={styles.text}>Pantalla 3.1 - Perfil</Text>
      <TextInput placeholder="Modificar email" style={styles.input} />
      <Button title="Ir a 3.2" onPress={() => navigation.navigate('Screen3B')} />
    </View>
  );
}
