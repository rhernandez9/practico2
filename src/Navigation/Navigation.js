import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SumaStack from '../Screens/SumaComponent';
import RestaStack from '../Screens/RestaComponent';
import MultiplicacionStack from '../Screens/MultiplicacionComponent';
import DivisionStack from '../Screens/DivisionComponent';
import FactorialStack from '../Screens/FactorialComponent';

const Tab=createBottomTabNavigator();
export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="suma" component={SumaStack} options={{title:'Suma'}}/>
            <Tab.Screen name="resta" component={RestaStack} options={{title:'Resta'}}/>
            <Tab.Screen name="multiplicacion" component={MultiplicacionStack} options={{title:'Multipliacion'}}/>
            <Tab.Screen name="division" component={DivisionStack} options={{title:'Division'}}/>
            <Tab.Screen name="factorial" component={FactorialStack} options={{title:'Factorial'}}/>
        </Tab.Navigator>
    );
}
