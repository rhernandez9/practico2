import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DivisionComponent from '../Screens/DivisionComponent';

const Stack= createStackNavigator();
export default function Division(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="division" component={DivisionComponent} options={{title:'Division'}}/>
        </Stack.Navigator>
 );
}