import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Styles from '../source/styles';
import { useNavigation } from '@react-navigation/native';
import Fontawesome from '@expo/vector-icons/FontAwesome6';

export default function Index() {
    const navigation = useNavigation();

    return (
        <View style={Styles.container}>
            <Image 
                style={{ position: 'absolute', bottom: 0}}
                resizeMode='contain'
                source={require('../assets/wave.png')}
            />
            <View style={Styles.searchSection}>
                <Fontawesome
                    style={Styles.iconLeft}
                    name="arrow-right"
                    size={24}
                />
                <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Produto')}>
                    <Text style={Styles.buttonText}>  Product  </Text>
                </TouchableOpacity>
                <Fontawesome
                    style={Styles.icon}
                    name="dropbox"
                    size={24}
                />
            </View>
            <View style={Styles.searchSection}>
                <Fontawesome
                    style={Styles.iconLeft}
                    name="arrow-right"
                    size={24}
                />
                <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Sobre')}>
                    <Text style={Styles.buttonText}>  About us  </Text>
                </TouchableOpacity>
                <Fontawesome
                    style={Styles.icon}
                    name="copy"
                    size={24}
                />
            </View>
        </View>
    );
}