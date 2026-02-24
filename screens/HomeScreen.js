import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/250px-Default_pfp.svg.png",
        }}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <View style={styles.btnContainer}>
        <Button
          title="Logar"
          onPress={() => Alert.alert("Login", "Email: " + email)}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="Cadastrar-se"
          color="#98fb98"
          onPress={() => navigation.navigate("Cadastro")}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Senha")}>
        <Text style={styles.senha}>Esqueceu a senha?</Text>
      </TouchableOpacity>

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
  img: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  senha: {
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
    textDecorationLine: "underline",
  },
  btnContainer: {
    width: 250,
    marginTop: 10,
  },
});
