import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import Contrats from '../screens/contrats';
import Inscription from '../screens/inscription';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options= {{headerShown : true}} name=' SMART CONTRAT APP Version1.0' component={Home} />
            <Stack.Screen options= {{headerShown : true}}name='Login' component={Login} />
            <Stack.Screen options= {{headerShown : true}}name='Contrats' component={Contrats} />
            <Stack.Screen options= {{headerShown : true}}name='Inscription' component={Inscription} />
        </Stack.Navigator>
    );
};

export default HomeStack;
