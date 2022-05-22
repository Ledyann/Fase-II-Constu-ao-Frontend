import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function Login({ navigation }) {
  return (
    <View style={styles.conteudo}>
      <Text style={styles.logo}>
        <Icon name="car" size={70}
        AlignItems= "center" />
      </Text>
      <Text style={styles.titulo}>
      Carona Online
      </Text>
      <Text style={styles.rotulo}>Email</Text>
      <TextInput style={styles.input}
        keyboardType="email-address"
      />
      <Text style={styles.rotulo}>Senha</Text>
      <TextInput style={styles.input}
        secureTextEntry={true}
      />
      <View style={styles.espacamento}>
       <Text style={styles.senha}onPress={() => navigation.navigate('novasenha')}>Esqueceu a Senha?</Text>
       
       <View style={styles.espacamento}>
          <Button title="Entrar" color='cornflowerblue' 
            onPress={() => navigation.navigate('lista')} />
       </View>
       
       <View style={styles.espacamento}>
          <Button title="Cadastre-se" color='cornflowerblue' 
            onPress={() => navigation.navigate('cadastrousuario')} />
       </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkblue',
    paddingHorizontal: 14,
  },
  logo: {
    color: 'white',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  rotulo: { 
    color: 'lightgray', 
    paddingTop: 14 
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  senha: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 14,
    color: 'white',
    textAlign: 'right',
  },
  espacamento: {
    paddingTop: 15,
    paddingBottom: 15,
  }
});