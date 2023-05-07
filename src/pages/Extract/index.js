import React,{useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import  db  from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Content,
  Card, CardHeader, CardContent, Title, SafeAreaView,
} from './styles';

export default function Extract({ navigation }) {
  
  const [user, setUser] = useState([])

  const getUsers = async ()=>{
    const authenticated = JSON.parse(await AsyncStorage.getItem('user'))
    const appUser = await db.collection('extrato').doc(authenticated.uid).get()
    console.log(appUser.data().transacoes)
    if(appUser.data()){
      setUser(appUser.data().transacoes)
    }
  }

  function currencyFormat(num) {
    if(num)
      return '$t ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return 0
 }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <SafeAreaView>
      <Container>
      <Icon name="menu" size={24} color="#FFF" onPress={()=>{navigation.openDrawer()}} style={{marginLeft: 20}}/>
        <Header nome={""} />
        <Content>
            <Card 
            >
               <CardHeader><Title>Extrato de movimentação</Title></CardHeader>
              <CardContent>
                
                {
                    user?.map((item)=>{
                        return (
                            <Title key={item.id}>{item.data} - {item.transacao} {currencyFormat(item?.valor)}</Title>
                        )
                    })
                }
                
              </CardContent>
              {/* <CardFooter>
                <Annotation>
                Transferência de $t 20,00 recebida de Eder Rosa hoje às 16:00h
                </Annotation>
              </CardFooter> */}
            </Card>

        </Content>

        <Tabs />
      </Container>
    </SafeAreaView>
  );
}
