import React,{useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logout({ navigation }) {

    useEffect(()=>{
    AsyncStorage.clear().then(x=>{
        navigation.navigate('Login')
    })
      
    },[])
    return (
    <></>)
}