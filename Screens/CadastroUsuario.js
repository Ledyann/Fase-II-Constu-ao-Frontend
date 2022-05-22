

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroUsuario({ navigation }) {
  return (
  <SafeAreaView style={{flex :1}}>
       <View style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          backgroundColor: 'darkblue',
          height: 56,
          alignItems: 'center'
        }}>

<Icon name="arrow-left" size={20} style={{ color: 'white'}} onPress={() => navigation.goBack()} />

          <Text
            style={{ flex: 14,
              color: 'white',
              fontSize: 26,
    textAlign: 'center',}}>Novo Usuario
    </Text>
    

      </View>
      <View style={{paddingHorizontal: 16}}>
        <Text style={styles.rotulo}>Nome</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.rotulo}>Email</Text>
        <TextInput style={styles.input}
        keyboardType="email-address"/>
        <Text style={styles.rotulo}>Senha</Text>
        <TextInput style={styles.input}/>
          <View style={{paddingTop: 24}}>
          <Button title="Salvar" color='cornflowerblue' 
          onPress={() => navigation.navigate('login')} />
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  rotulo: { 
    color: 'gray', 
    paddingTop: 16 
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
