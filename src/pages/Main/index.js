import React,{useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import  db  from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Content,
  Card, CardHeader, CardContent, Title, Description, SafeAreaView,
} from './styles';

export default function Main({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({nome:'', saldo:0})

  const getUsers = async ()=>{
    const authenticated = JSON.parse(await AsyncStorage.getItem('user'))
    const appUser = await db.collection('Users').doc(authenticated.uid).get()
    setUser(appUser.data())
  }

  function currencyFormat(num) {
    return '$t ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <SafeAreaView>
      <Container>
      <Icon name="menu" size={24} color="#FFF" onPress={()=>{navigation.openDrawer()}} style={{marginLeft: 20}}/>
        <Header nome={user.nome} />
        <Content>
            <Card 
            >
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                {isVisible ? 
                <Icon name="visibility" size={28} color="#666"  onPress={()=>{setIsVisible(false)}}/>
                :
                <Icon name="visibility-off" size={28} color="#666" onPress={()=>{setIsVisible(true)}}/>
                }
                
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                {isVisible ? 
                <Description>{currencyFormat(user.saldo)}</Description>
                :
                <Description>*****</Description>
                }
              </CardContent>
            </Card>
        </Content>
        <Tabs />
      </Container>
    </SafeAreaView>
  );
}
