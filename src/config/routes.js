import React from 'react';

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Settings from '../screens/contrats';
import HomeStack from './homeStack';
import Login from '../screens/login';

const BottomStack = createMaterialBottomTabNavigator();
    
const Routes = () => {
    return(

        <NavigationContainer>
            <BottomStack.Navigator 
                    activeColor="#3e2465"
                    inactiveColor="#8366ae"
                    initialRouteName="Home"
                    barStyle={{ backgroundColor: '#87CEEB' , paddingBottom: 5 }}>

            <BottomStack.Screen name='HOME' component={HomeStack} options={{
                    tabBarLabel: 'HOME',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../assets/images/homeicon.png')} style={{height:28, width:30}} tintColor={color}/>
                                ),
                        }}/>

            <BottomStack.Screen name='Settings' component={Settings} options={{
                    tabBarLabel: 'INFO CONTRATS',
                    tabBarIcon: ({ color }) => (
                                        <Image source={require('../assets/images/reglageicon.png')} style={{height:30, width:30}} tintColor={color}/>
                                ),
                        }}/>

            <BottomStack.Screen name='Login' component={Login} options={{
                    tabBarLabel: 'LOGIN',
                    tabBarIcon: ({ color }) => (
                                        <Image source={require('../assets/images/usericon.png')} style={{height:30, width:30}} tintColor={color}/>
                                ),
                        }}/>
                
            </BottomStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;