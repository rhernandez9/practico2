import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RestaComponent from '../Screens/RestaComponent';

const Stack= createStackNavigator();
export default function Resta(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="resta" component={RestaComponent} options={{title:'Resta'}}/>
        </Stack.Navigator>
 );
}