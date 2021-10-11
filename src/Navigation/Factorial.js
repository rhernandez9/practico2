import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FactorialComponent from '../Screens/FactorialComponent';

const Stack= createStackNavigator();
export default function Factorial(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="factorial" component={FactorialComponent} options={{title:'Factorial'}}/>
        </Stack.Navigator>
 );
}