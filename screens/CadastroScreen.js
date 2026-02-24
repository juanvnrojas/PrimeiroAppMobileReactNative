import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function CadastroScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>

      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        placeholder="Senha"
      />

      <View style={styles.btnContainer}>
        <Button title="Cadastrar" onPress={() => navigation.navigate("Home")} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#014995",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  btnContainer: {
    width: 250,
    marginTop: 20,
  },
});
