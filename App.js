import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';

export default function App() {
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://0.academia-photos.com/30234330/13546231/115364738/s200_pablo.sp_ndola.jpeg',
        }}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={botarSenha}
      />

      <Button
        title="Logar"
        onPress={() => Alert.alert('Email: ' + email)}
      />

      <Button
        title="Cadastrar-se"
        onPress={() => Alert.alert('Cadastro')}
      />

      <Text>Esqueceu a senha?</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#014995',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: '#fff'
  },
});
