import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native"
import React, {useState} from 'react';
import styles from "../styles/calculadorTemperatura";

export const CalculadorTemperatura = () => {
    let [C, setC] = useState('');

    let [F, setF] = useState(''
    
    
    
    
    );
    let [resultado, setResultado] = useState('');

    function calcularFahrenheit() {
        F = (1.8 * C + 32).toFixed(2);
        setResultado(`O valor em Fahrenheit é:  ${F}F`);
        Keyboard.dismiss()
    }
    function calcularCelsius() {
        C = ((F - 32) * (5 / 9)).toFixed(2);
        setResultado(`O valor em Celsius é:  ${C}C`);
        Keyboard.dismiss()
    }
    const limpar = () => {
        setResultado('')
        setF('')
        setC('')
    }
    return (
        <View>
            <Text style={styles.titulo} >Aplicativo de conversão de Temperatura</Text>
            <Text style={styles.text}>Conversão de celsius para fahrenheit</Text>
            <TextInput style={styles.campo} placeholder='digite a temperatura em celsius' keyboardType='numeric' value={C} onChangeText={setC} />
            <TouchableOpacity style={styles.botao} onPress={calcularFahrenheit}>
                <Text style={styles.textobotao}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Conversão de fahrenheit para celsius</Text>
            <TextInput style={styles.campo} placeholder='digite a temperatura em fahrenheit' keyboardType='numeric' value={F} onChangeText={setF} />
            <TouchableOpacity style={styles.botao} onPress={calcularCelsius}>
                <Text style={styles.textobotao}>Calcular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.limpar} onPress={limpar}>
            <Text style={styles.textobotao}>Limpar</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{resultado}</Text>
            
        </View>
    )
}
export default CalculadorTemperatura;