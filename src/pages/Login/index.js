import React,{useState} from 'react';
import {
    Container,
    Content,
    Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation, SafeAreaView,
  } from './styles';
import { StyleSheet, TextInput,Button } from 'react-native';

export default function Login({ navigation }) {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
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
                keyboardType="text"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Senha"
                secureTextEntry={true}
            />
            <Button
                onPress={()=>{navigation.navigate('Home')}}
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