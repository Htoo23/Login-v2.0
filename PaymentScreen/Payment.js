import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Image, View, Button, Text, TouchableOpacity } from 'react-native';
import CardSVG from '../component/CardSVG';
import { useNavigation } from '@react-navigation/native';

export default function PaymentScreen() {
    const navigation = useNavigation();
    const handleLogout = () => {
        
    
       
        navigation.navigate('Login');
      };
    return (
        <SafeAreaView style={styles.container}>

            <Image source={require('../assets/logo.png')} style={styles.image} />
            <Text style={{ color: 'gray', fontWeight: 'bold', marginTop: 15 }}>PAYING </Text>
            <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 15 }}>Ngwe Pu</Text>
            <Text style={{ fontSize: 55, fontWeight: '500', marginBottom: 15 }}>5000.00 MMK</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Add a note"
                placeholderTextColor="gray"
            />
            <CardSVG />
            <TouchableOpacity onPress={handleLogout} style={styles.btn}>
                <Text style={styles.text}>Log out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textInput: {
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#00000010',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    btn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        marginTop: 50,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 15,
        paddingBottom: 20,
    }
});