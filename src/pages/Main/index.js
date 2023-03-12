import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Animated from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import {
  Container,
  Content,
  Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation, SafeAreaView,
} from './styles';

export default function Main({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView>
      <Container>
      <Icon name="menu" size={24} color="#FFF" onPress={()=>{navigation.openDrawer()}} style={{marginLeft: 20}}/>
        <Header />
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
                <Description>$t 197,00</Description>
                :
                <Description>*****</Description>
                }
                
              </CardContent>
              <CardFooter>
                <Annotation>
                Transferência de $t 20,00 recebida de Eder Rosa hoje às 16:00h
                </Annotation>
              </CardFooter>
            </Card>

        </Content>

        <Tabs />
      </Container>
    </SafeAreaView>
  );
}
