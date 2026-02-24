import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default function SenhaScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerMen}>Esqueceu a senha?</Text>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Seu email cadastrado"
      />

      <View style={styles.btnContainer}>
        <Button
          title="Enviar"
          onPress={() => Alert.alert("Sucesso", "Email enviado!")}
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
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
  headerMen: {
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: "#fff",
  },
  btnContainer: {
    width: 250,
    marginTop: 20,
  },
});
