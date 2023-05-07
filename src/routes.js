import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main';
import Configuration from './pages/Configuration';
import Login from './pages/Login';
import Extract from './pages/Extract';
import Logout from './pages/Logout';

const drawer = createDrawerNavigator();
const stack = createNativeStackNavigator();

function DrawerNavigation(){
        
        return ( 
        <drawer.Navigator  >
            <drawer.Screen options={{headerShown: false}} name="Inicio" component={Main} />
            <drawer.Screen options={{headerShown: false}} name="Extrato" component={Extract} />
            <drawer.Screen options={{headerShown: false}} name="Configurações" component={Configuration} />
            <drawer.Screen options={{headerShown: false}} name="Sair" component={Logout} />
        </drawer.Navigator>)
    }

export default function Routes() {
    
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Login">
                <stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                <stack.Screen options={{headerShown: false}} name="Home" component={DrawerNavigation}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}