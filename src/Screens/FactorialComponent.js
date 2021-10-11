import React, {useState} from "react";
import {View, Text, TextInput, Alert, Button} from 'react-native';

export default function Factorial(props){
    const{navigation} = props;
    const[numero1,guardar1] = useState('');

    const factorial = () => {
        // Validar
        if(numero1.trim() === ''){
            // Falla la validación
            mostrarAlerta();
             return;
        }
    Alert.alert(
        'Su resultado es:', // Titulo
        factorial1(numero1).toString(), // mensaje
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
const factorial1 = (numero) => {
	// Sacar valor absoluto
	numero = Math.abs(numero);
	if (numero <= 1) return 1;
	return numero * factorial1(numero - 1);
};
    return(
        <>
            <View>
                <Text style={{color: 'red',fontWeight: 'bold',fontSize: 20,marginTop: 20}}>FACTORIAL DE UN NUMERO: </Text>
            </View>
            <View>
                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 18,marginTop: 20}}>Numero 1:</Text>
                <TextInput style={{marginTop: 10,height: 50,borderColor: '#e1e1e1',borderWidth: 1,borderStyle: 'solid'}} onChangeText={ texto => guardar1(texto) }/>
            </View>
            <View>
                <Button title="Factorial" onPress={factorial} />
            </View>
        </>
    );
}