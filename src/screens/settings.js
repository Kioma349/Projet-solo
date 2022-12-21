import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';


const Settings = () => {

    const navigation = useNavigation ();

    return (
        <SafeAreaView>
            <Text>
                PAGE SETTINGS
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>

            <Text>
                VERS PAGE SETTINGS
            </Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};

export default Settings;