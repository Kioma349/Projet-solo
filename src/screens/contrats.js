import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import styled from 'react-native-styled-components';
const Contrats = () => {

    const MainContainer = styled(View, {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, {forwardRef: true});
     
    const DefaultText = styled(Text, {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#87CEEB',
    });

    const RedText = styled(DefaultText, {
        color: 'red',
    });

    const GreenText = styled(DefaultText, {
        color: 'green',
    });
     
    const ColorText = styled(DefaultText, props => ({
        color: props.color,
    }));

    const navigation = useNavigation ();

return (
    <ScrollView>
        <Button title="INFO CONTRATS " color="#87CEEB"onPress={() => Alert.alert("OUPS Vous êtes deja sur la page des contrats !")}/>

    <MainContainer ref={ref => this.mainContainerRef = ref}>
        <DefaultText>Quels sont les avantages et inconvénients du smart contract ?{"\n"} </DefaultText>
        <RedText>Révolutionnaire, le smart contract ? 
                Oui, mais il possède aussi certaines limites. Voici donc un panorama des principaux avantages 
                et inconvénients de ce nouvel outil.{"\n"} 
            </RedText>
        <GreenText style={{textAlignVertical: "center",textAlign: "center",} }>Les avantages {"\n"} 

        {"\n"}L’automatisation des processus : grâce à cette automatisation,
        certains risques courants (tels que le risque d’impayé) disparaissent, 
        puisque l’actif est transféré automatiquement dès que les critères prédéfinis sont remplis. 
        C’est aussi un véritable gain de temps et d’efficacité. 
        La sécurisation des échanges : la blockchain étant immutable (elle ne peut être modifiée ou falsifiée), 
        l’accord entre les parties est sécurisé. 
        La suppression des coûts intermédiaires dans l’élaboration et l’exécution d’un contrat : 
        certains contrats traditionnels nécessitent l’intervention d’un intermédiaire (avocat, notaire…). 
        Avec un smart contract, cette intervention n’est plus nécessaire.{"\n"}  
                
        </GreenText>
        <ColorText > {"\n"} Les inconvénients:{"\n"} </ColorText>

        <ColorText color='blue'>
            {"\n"}Le risque de failles, inhérent à tout programme informatique. 
            Plus les smarts contracts sont complexes, plus le risque de faille est élevé. 
            L’absence de toute régulation, qui pose un problème d’ordre moral et juridique. 
                Par ailleurs, les smart contracts possèdent des limites qui tiennent 
                à la nature immuable (non modifiable) de la blockchain. 
                Cela entraîne en effet une non-réversibilité des smart contracts, 
                notamment en cas d’erreur dans leur rédaction. 
                Cette impossibilité de revenir en arrière pose un risque évident.
                Reste que la blockchain, en tant que technologie sous-jacente aux smart contracts, 
                est encore jeune et (surtout) perfectible : 
                des améliorations pourraient donc avoir lieu dans les prochaines années.
        </ColorText>
        <ColorText color='blue'>{"\n"} THE END</ColorText>

        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{backgroundColor: 'red',}}>
        <Text style={{textAlignVertical: "center",textAlign: "center"}}>RETOUR SUR LA PAGE HOME</Text>
            </View>
        </TouchableOpacity>
    </MainContainer>


    </ScrollView>
    );
};

export default Contrats;