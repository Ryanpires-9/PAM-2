import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Index from './components/Home';
import Produto from './components/Produto';
import Sobre from './components/Sobre';
import Fontawesome from '@expo/vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function bottomTab () {
    return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {paddingBottom: 15},
                animation: 'shift'
            }}>
            <Tab.Screen 
                name="Home" 
                component={Index} 
                options={{
                tabBarActiveTintColor: '#e1edf3',
                tabBarInactiveTintColor: '#757779ff',
                tabBarIcon: ({ color }) => (
                <Fontawesome
                    name="house-user"
                    color={color}
                    size={26}
                />
                ),
            }}
            />
            <Tab.Screen 
                name="Produto" 
                component={Produto} 
                options={{
                tabBarActiveTintColor: '#e1edf3',
                tabBarInactiveTintColor: '#757779ff',
                tabBarIcon: ({ color }) => (
                <Fontawesome
                    name="dropbox"
                    color={color}
                    size={26}
                />
                ),
            }}
            />
            <Tab.Screen 
                name="Sobre" 
                component={Sobre} 
                options={{
                tabBarActiveTintColor: '#e1edf3',
                tabBarInactiveTintColor: '#757779ff',
                tabBarIcon: ({ color }) => (
                <Fontawesome
                    name="copy"
                    color={color}
                    size={26}
                />
                ),
            }}
            />
        </Tab.Navigator>
    </NavigationContainer>  
    )
}

export const stack =()=> {
    return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Home"
                screenOptions={{
                headerShown: true
            }}>
            <Stack.Screen name="Home" component={Index} headerTitle="Home"/>
            <Stack.Screen name="Produto" component={Produto} headerTitle="Product"/>
            <Stack.Screen name="Sobre" component={Sobre} headerTitle="About us"/>
        </Stack.Navigator>  
    </NavigationContainer>
    )
}