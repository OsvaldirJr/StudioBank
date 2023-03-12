import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

export default function Tabs() {
  return (
    <View 
    style={{marginTop:20}}
    >
      <TabsContainer>
        <TabItem>
          <Icon name="list-alt" size={24} color="#FFF" />
          <TabText>extrato</TabText>
        </TabItem>
        <TabItem>
          <Icon name="swap-horiz" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
      </TabsContainer>
    </View>
  );
}
