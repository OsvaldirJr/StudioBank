import React,{useEffect, useState} from 'react';
import {
    Container,
    Content,
    Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation, SafeAreaView,
  } from './styles';
import { StyleSheet, TextInput,Button } from 'react-native';
import  {auth}  from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    const login = async ()=> {
      let authenticated = await auth.signInWithEmailAndPassword(`${text}@studiobank.com`, number)
      if(authenticated){
        await AsyncStorage.setItem('user', JSON.stringify(authenticated.user))
        navigation.navigate('Home')
      }
      
    }

    useEffect(()=>{
     AsyncStorage.getItem('user').then(authenticated=>{
      if(authenticated){
        navigation.navigate('Home')
      }

      })
    },[])
    return (
    <SafeAreaView>
        <Container>
        <Content>
            <Card >
              <CardContent>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Nome"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Senha"
                secureTextEntry={true}
            />
            <Button
                onPress={login}
                title="Entrar"
                color="#172529"
                accessibilityLabel="Learn more about this purple button"
                />
              </CardContent>
            </Card>
        </Content>
        </Container>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:10
    },
  });