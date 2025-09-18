import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Styles from '../source/styles';
import { useNavigation } from '@react-navigation/native';
import Fontawesome from '@expo/vector-icons/FontAwesome6';

export default function Sobre() {
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
                    name="arrow-rotate-left"
                    size={24}
                />
                <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Styles.buttonText}>  Back to Home Page Button  </Text>
                </TouchableOpacity>
                <Fontawesome
                    style={Styles.icon}
                    name="house-user"
                    size={24}
                />
            </View>
        </View>
    );
}