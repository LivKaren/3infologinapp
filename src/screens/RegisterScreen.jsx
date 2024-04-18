import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";


export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [nome, setNome] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState({
    nome: null,
    email: null,
    senha: null,
    repetirSenha: null,
    logradouro: null,
    cep: null,
    cidade: null,
    estado: null,
  });

 

  function realizaRegistro() {
    console.log("Fazer Registro");

    let dados = {
      nome : nome,
      senha : senha
    }
      if(dados == ""){
        navigation.navigate('Menu')
      } console.log("erro!")
    
    // o que precisa ser feito?
    // 1) Validar se todos os campos foram digitados
    // 2) Validar se as senhas são iguais
    // 3) Enviar os dados para a API do Firestore junto ao Firebase Auth
    // 4) Tratar os erros
    // 5) Redirecionar para a tela de Login
  }

  function buscaCEP() {
    console.log("Busca CEP");
    let cepLimpo = cep.replace("-", "").trim();
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((res) => res.json()) 
      .then((dados) => {
        console.log(dados);
        setLogradouro(dados.logradouro);
        setCidade(dados.localidade);
        setEstado(dados.uf);
      })
      .catch((erro) => {
        console.error(erro);
        setErro("CEP não encontrado");
      });
  }

  



  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant="headlineSmall">Faça seu Registro</Text>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Repita sua senha"
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry
          style={styles.input}
        />
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Text variant="headlineSmall">Dados pessoais</Text>
          <TextInput
            placeholder="Digite seu CEP (somente números)"
            value={cep}
            onChangeText={setCep}
            onBlur={buscaCEP}
            keyboardType="numeric"
            style={styles.input}
            maxLength={8} 
          />
          <TextInput
            placeholder="Logradouro"
            value={logradouro}
            onChangeText={setLogradouro}
            style={styles.input}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder="Cidade"
              value={cidade}
              onChangeText={setCidade}
              style={{
                ...styles.input,
                width: "70%",
              }}
            />
            <TextInput
              placeholder="Estado"
              value={estado}
              onChangeText={setEstado}
              style={{
                ...styles.input,
                width: "30%",
              }}
              maxLength={2} 
            />
          </View>
        </View>
        <Button onPress={realizaRegistro} mode="outlined">
          Registrar
        </Button>
        <Button onPress={() => navigation.navigate("LoginScreen")}>
          Voltar ao login
        </Button>
      </View>
    </View>
  );
}
