import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import FGpassword from '../screens/FGpassword'
import Cadastro from '../screens/Cadastro';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home : undefined;
    Login : undefined;
    FgPassword : undefined;
    Cadastro : undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>


export default function StackComponent(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Login" component={Login}   options={{headerShown: false }}  />
                <Stack.Screen  name="Home" component={Home} />
                <Stack.Screen  name="FgPassword" component={FGpassword} options={{headerShown: false }}  />
                <Stack.Screen  name="Cadastro" component={Cadastro} options={{headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>

    );
}