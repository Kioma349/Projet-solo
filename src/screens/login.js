import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView, Text, StyleSheet, View, Button, Alert, TouchableOpacity } from 'react-native';
import layouts from '../constantes/layouts';
import {TextInput} from 'react-native';


const Login = () => {

    const navigation = useNavigation ();

    return (
        

       
            <View style = { style.root}> 
{/*<Button
title="PAGE DE CONNEXION"
color="#87CEEB"
onPress={() => Alert.alert("OUPS Vous êtes deja sur la page de connexion!")}/>
<Text style={{textAlignVertical: "center",textAlign: "center",}}> {"\n"}PAGE DE CONNEXION</Text>*/}

            <View style={style.title}>
                {/**title */}
                <Text style= {style.title_text}>PAGE DE CONNEXION </Text>
                <Text style= {[style.title_text , style.title_colored]}>USER</Text>

            </View>

                {/** Input */}
                <View style= {style.input_group}>
                <Text style= {style.text}>Email:</Text>
                    <View style = { style.input_container}>
                            <TextInput secureTextEntry={false} placeholder='Entrer votre adresse Email'/>
                    </View>

                    

                </View>

                <View style= {style.input_group}>
                <Text style= {style.text}>Mot de passe:</Text>
                    <View style = { style.input_container}>
                            <TextInput  secureTextEntry={true} placeholder='Entrer votre mot de passe '/>
                    </View>
                    {/**Button */}
            <TouchableOpacity onPress={() => navigation.navigate('Contrats') } style={style.button} >
            <Text style={[style.text, style.button_text]}>ME CONNECTER</Text>
            </TouchableOpacity>

                </View>

       <View style={style.container}>
       <TouchableOpacity onPress={() => navigation.navigate('Inscription') }>
        <Text style={[style.text, style.button_text]}> INSCRIPTION </Text>
       </TouchableOpacity>
       </View>
                
        </View>

        
);
};

export default Login;

const style = StyleSheet.create({

        container: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10
        },

        root:{
            flex : 1,
            justifyContent: 'center',
            paddingHorizontal: layouts.paddingHorizontal,
            paddingVertical: layouts.paddingVertical,
            backgroundColor: layouts.bgColor
        },

        input_container:{
            borderWidth: 2,
            borderColor: layouts.primary,
            borderRadius: 50,
            marginTop:5,
            marginBottom:20,
            paddingHorizontal:10,
            paddingVertical: 10,
            backgroundColor: '#fff'


        },

        input:{
            padding:10,
        },
        text:{
            fontSize: 18,
        },
        button:{
            backgroundColor : layouts.primary,
            padding: 15,
            borderRadius: 30,
        },
        button_text:{
            textAlign: 'center',
            color : '#fff',
            
        },
        title:{
            flexDirection:'row',
        },

        title:{
            flexDirection:'row',
            justifyContent:'center',
        },
        title_text:{
            textAlign: 'center',
            fontSize :22,
            marginBottom: 40,

        },
        title_colored:{
            color:layouts.primary,
            fontWeight: 'bold',
        },

        input_group:{
            marginBottom:5,
        },

      
        



})
