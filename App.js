import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroCarona from './Screens/CadastroCarona';
import CadastroUsuario from './Screens/CadastroUsuario';
import NovaSenha from './Screens/NovaSenha';
import Lista from './Screens/Lista';
import Login from './Screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='lista' component={Lista} />
      <Stack.Screen name='cadastrocarona' component={CadastroCarona} />
      <Stack.Screen name='cadastrousuario' component={CadastroUsuario} />
      <Stack.Screen name='novasenha' component={NovaSenha} />
    </Stack.Navigator>
  </NavigationContainer>;
}

