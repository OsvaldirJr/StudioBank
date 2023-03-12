import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main';
import Configuration from './pages/Configuration';
import Login from './pages/Login';

const drawer = createDrawerNavigator();
const stack = createNativeStackNavigator();

export default function Routes() {
    function drawerNavigation(){
        return ( 
        <drawer.Navigator  >
            <drawer.Screen options={{headerShown: false}} name="Inicio" component={Main} />
        <drawer.Screen options={{headerShown: false}} name="Configurações" component={Configuration} />
        </drawer.Navigator>)
    }
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Login">
                <stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                <stack.Screen options={{headerShown: false}} name="Home" component={drawerNavigation}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}