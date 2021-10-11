import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SumaComponent from '../Screens/SumaComponent';

const Stack= createStackNavigator();
export default function Suma(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="suma" component={SumaComponent} options={{title:'Suma'}}/>
        </Stack.Navigator>
 );
}
