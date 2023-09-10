
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './features/home/presentation/screens/Home';

const Stack = createNativeStackNavigator();

const Main = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Group>
                    <Stack.Screen name="home" component={Home} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
 
export default Main; 