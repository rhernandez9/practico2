import  { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
    backgroundColor: '#FFF',
    flex: 1
    },
    titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20 ,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
    },
    contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
    },
    listado: {
    flex: 1,
    },
    btnMostrarForm: {
    padding: 10,
    backgroundColor:Colors.BUTTON_COLOR,
    marginVertical: 10
    },
    textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
    }
});