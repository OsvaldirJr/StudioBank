import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Tabs() {
  const navigation = useNavigation()
  return (
    <View 
    style={{marginTop:20}}
    >
      <TabsContainer>
         
        <TabItem onTouchStart={()=> navigation.navigate('Extrato')}>
          <Icon name="list-alt" size={24} color="#FFF" />
          <TabText>Extrato</TabText>
        </TabItem>
        
        {/* <TabItem>
          <Icon name="swap-horiz" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem> */}
      </TabsContainer>
    </View>
  );
}
