import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        color: 'black',
        marginTop: 40,
        marginBottom: 40,
        fontSize: 30,
    },

    campo: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        margin: 15,
        textAlign:'center',
        padding: 10,
        fontSize: 15,
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        margin: 15,
        backgroundColor: 'black',
        padding: 10,
    },
    textobotao: {
        fontSize: 20,
        color: 'white',
        textAlign:'center'
    },
    text: {
        fontSize: 20,
        marginTop:35,
        color: 'black',
        textAlign:'center'
    },
   limpar:{
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 15,
    padding: 10,
   }
})
export default styles;