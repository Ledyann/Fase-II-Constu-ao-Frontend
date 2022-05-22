import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, Pressable, SafeAreaView, Text, View, Image } from 'react-native';

export default function Lista({ navigation }) {
  const caronas = [
    { local: 'IESB Sul', horario: '14:30', data: '14/05/2022', imagem: require('../assets/oeste.jpg') },
    { local: 'IESB Norte', horario: '19:00', data: '22/06/2022', imagem: require('../assets/norte.jpg') },
    { local: 'IESB Oeste', horario: '16:30', data: '30/06/2022', imagem: require('../assets/oeste.jpg') },
     { local: 'IESB Sul', horario: '14:30', data: '14/05/2022', imagem: require('../assets/oeste.jpg') },
    { local: 'IESB Norte', horario: '19:00', data: '22/06/2022', imagem: require('../assets/norte.jpg') },
    { local: 'IESB Oeste', horario: '16:30', data: '30/06/2022', imagem: require('../assets/oeste.jpg') },
  ];
  const Caronas = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          borderBottomColor: 'lightgray',
          borderBottomWidth: 5,
          alignItems: 'center',
          paddingHorizontal: 16,
          backgroundColor: 'lavender'
        }}>
        <Icon name="trash" size={20} style={{ color: 'red'}} onPress={() => navigation.navigate('cadastrocarona')} />
        <Text style={{ flex: 1 }}>{item.local}</Text>
        <Text style={{ flex: 2 }}>{item.horario}</Text>
        <Text style={{ flex: 3}}>{item.data}</Text>
        <Image style={{ flex: 4, height: 30, width: 30}} resizeMode='contain' source={item.imagem} />
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex :1}}>
    <View style={{flex :1}}>
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
    textAlign: 'center',}}>Caronas</Text>
   
      </View>
      <FlatList data={caronas} renderItem={Caronas} />
      
      <Pressable 
      style={{position: 'absolute', bottom: 16, right: 16,
      height: 48, width: 48, backgroundColor: 'cornflowerblue', 
      borderRadius: 30, justifyContent: 'center', 
      alignItems: 'center'
      }}
      onPress={() => navigation.navigate('cadastrocarona')}>
        <Text style={{color: 'white', fontSize: 24}}>+</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}
