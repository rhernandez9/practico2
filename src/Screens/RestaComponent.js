import React, {useState} from "react";
import {View, Text, TextInput, Alert, Button} from 'react-native';

export default function Resta(props){
    const{navigation} = props;
    const[numero1,guardar1] = useState('');
    const[numero2,guardar2] = useState('');
    const restar = () => {
        // Validar
        if(numero1.trim() === '' || numero2.trim() === '' ){
            // Falla la validación
            mostrarAlerta();
             return;
        }

    Alert.alert(
        'Su resultado es:', // Titulo
        (Number.parseInt(numero1)  - Number.parseInt(numero2)).toString(), // mensaje
        [{
            text: 'OK' // Arreglo de botones
        }]
    )

}
// Muestra la alerta si falla la validación
const mostrarAlerta = () => {
    Alert.alert(
    'Error', // Titulo
    'Todos los campos son obligatorios', // mensaje
    [{
        text: 'OK' // Arreglo de botones
    }]
    )
}    
    return(
        <>
            <View>
                <Text style={{color: 'red',fontWeight: 'bold',fontSize: 20,marginTop: 20}}>RESTA ENTRE 2 NUMEROS</Text>
            </View>
            <View>
                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 18,marginTop: 20}}>Numero 1:</Text>
                <TextInput style={{marginTop: 10,height: 50,borderColor: '#e1e1e1',borderWidth: 1,borderStyle: 'solid'}} onChangeText={ texto => guardar1(texto) }/>
            </View>
            <View>
                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 18,marginTop: 20}}>Numero 2:</Text>
                <TextInput style={{marginTop: 10,height: 50,borderColor: '#e1e1e1',borderWidth: 1,borderStyle: 'solid'}} onChangeText={ texto => guardar2(texto) }/>
            </View>
            <View>
                <Button title="Restar" onPress={restar} />
            </View>
        </>
    );
}