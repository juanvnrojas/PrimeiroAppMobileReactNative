import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';

export function App() {
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/250px-Default_pfp.svg.png',
        }}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={botarSenha}
      />

      <Button
        title="                        Logar                        "
        onPress={() => Alert.alert('Email: ' + email)}
      />

        <Text></Text>

      <Button
        title="                 Cadastrar-se                 "
        onPress={() => Alert.alert('Botão de cadastrar')}
      />
      <Text style = {styles.senha}>Esqueceu a senha?</Text>

      <StatusBar style="auto" />
    </View>
  );
}

export function Cadastro(){
  const [email, botarEmail] = React.useState('');
  const [senha, botarSenha] = React.useState('');
  const [nome, botarNome] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      

      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={botarNome}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Text  style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={botarSenha}
      />

      <Button
        title="                    Cadastrar                    "
        onPress={() => Alert.alert('Cadastro')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default function Senha(){
  const [email, botarEmail] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerMen}>Esqueceu a senha?</Text>
    

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={botarEmail}
      />

      <Button
        title="                       Enviar                       "
        onPress={() => Alert.alert('Enviar')}
      />
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
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: '10px'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 80,
    width: '100%',
    textAlign: "center",
    marginBottom: '20px',
    color: '#fff'
  },  
  headerMen: {
    fontSize: 45,
    width: '100%',
    textAlign: "center",
    marginBottom: '20px',
    color: '#fff'
  },
  text: {
    fontSize: '24px',
    marginRight: '185px',
    color: '#fff'
  },
  senha: {
    fontSize: '24px',
    color: '#fff'
  },

});
