import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MultipliacionComponent from '../Screens/MultiplicacionComponent';

const Stack= createStackNavigator();
export default function Multipliacion(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="multiplicacion" component={MultipliacionComponent} options={{title:'Multiplicacion'}}/>
        </Stack.Navigator>
 );
}