import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { styles } from '../../styles';

export default function Screen4B() {
  return (
    <View style={styles.containerYellow}>
      <Text style={styles.text}>Pantalla 4.2</Text>
      <Image source={{ uri: 'https://i.pinimg.com/originals/75/23/7b/75237bfb93fce0ddb61b36d16f12cb33.png' }} style={styles.image} />
      <TextInput placeholder="Comentario" style={styles.input} />
      <Button title="Enviar" onPress={() => alert('Comentario enviado')} />
    </View>
  );
}
