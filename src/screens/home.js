import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView, Image, ScrollView, Text, StyleSheet, View, Button, TouchableOpacity, Alert } from 'react-native';
import styled from 'react-native-styled-components';
import imageLocal from '../assets/images/smartcontract.png';


const Home = () => {
    
    const DefaultText = styled(Text, {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#87CEEB',
    });
    const GreenText = styled(DefaultText, {
        color: '87CEEB',
    });

    const BlueText = styled(DefaultText, {
        color: 'green',
    });

    const ColorText = styled(DefaultText, props => ({
        color: props.color,
    }));

    const navigation = useNavigation ();



    return (
        <ScrollView>
    <View >     
           <Button
        title="ACCUEIL "
        color="#87CEEB"
        onPress={() => Alert.alert("OUPS Vous êtes deja sur la page Home!")}/>

           {/*</View><Text style={{textAlignVertical: "center",textAlign: "center",}}> {"\n"} BIENVENU {"\n"}</Text>*/}
            
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>{"\n"}VERS PAGE CONNEXION</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Contrats')}>
            <Text>{"\n"}VERS MES CONTRATS</Text>
         </TouchableOpacity>

         <Text>{"\n"}</Text>
        <Image source={imageLocal} style={{height:400, width:399}}/>
            <GreenText style={{textAlignVertical: "center",textAlign: "center",} }>Qu’est-ce qu’un smart contract ? {"\n"}</GreenText>
            <Text style={{ fontWeight: 'bold' }} >{"\n"}

           < BlueText>Avant de donner une définition du smart contract, 
il convient de replacer ce programme informatique dans son contexte plus large, à savoir la blockchain.{"\n"}
La blockchain est une technologie qui permet de stocker 
et de transmettre des informations de manière sécurisée et sans organe central de contrôle.{"\n"}
Il est ainsi possible de réaliser des transactions numériques sans intermédiaire, 
tandis que le réseau blockchain garde celles-ci en mémoire pour en assurer la sécurité.{"\n"}

Elle peut être utilisée pour transférer et tracer des actifs (ex : les cryptomonnaies),{"\n"}
et pour exécuter des contrats de manière automatique. Ce sont les fameux smart contracts.{"\n"}

Un smart contract est donc un programme informatique dont l’objectif est d’automatiser une action :{"\n"}
Par exemple, l’exécution d’une transaction juridique ou financière. Il est issu de la blockchain 
et rend actuellement possible les transactions de cryptomonnaies.{"\n"} 

Concrètement, un smart contract exécute automatiquement des actions prédéfinies 
et inscrites dans une blockchain. 
A la différence d’un contrat traditionnel, qui définit les règles d’un accord entre plusieurs parties,{"\n"}

le smart contract inscrit ces règles dans une blockchain tout en garantissant le transfert d’un actif prédéfini, 
lorsque les conditions contractuelles sont remplies. {"\n"}
Seul le code informatique décide de l’exécution du contrat : c’est cette particularité qui rend ces contrats “intelligents”.{"\n"}
Dès lors que les conditions prédéfinies sont remplies,{"\n"}
le contrat est exécuté et chaque partie devient automatiquement débitrice de son obligation.{"\n"}

La complexité d’un smart contract est variable. Certains mettent en place des conditions simples{"\n"} 
(si la condition X est remplie, le contrat est automatiquement exécuté), {"\n"}
tandis que d’autres se basent sur une chaîne de conditions complexes. {"\n"}

</BlueText>

  
 </Text>

         
    </View>

    <ColorText color='blue' style={{textAlignVertical: 'center', textAlign: 'center'} }> THE END</ColorText>


     
        </ScrollView>
    );
};

export default Home;


