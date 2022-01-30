import React, { useState } from 'react';
import { Alert, Touchable } from 'react-native';
import Button from '../components/Button';
import SliderComponent from '../components/Slider';
import Clipboard from '@react-native-clipboard/clipboard';
import { Container, ImageLogo, PasswordArea, PasswordText, Title } from "./styles";

const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

export default function Principal() {
    const [password, setPassword] = useState("");
    const [size, setSize] = useState(12);

    function generatePass() {
       let pass = '';
       
       for (let value = 0; value < size; value++) {
            pass += charSet[Math.floor(Math.random() * charSet.length)];           
       }

       setPassword(pass);
    }

    function changeChartValue() {
        Clipboard.setString(password);
        
        return (value: number) => setSize(value);
    }

    function copyPasswor() {
        Alert.alert("Senha copiada com sucesso!🔥")
    }

    return (
        <Container>
            <ImageLogo source={require("../assets/logo.png")} />
            <Title>{size} Caracteres</Title>
            <SliderComponent size={size} onChangeValue={changeChartValue()} />
            <Button
                bgColor="#ff0095"
                title="Gerar Senha"
                onPress={() => generatePass()} />
            {password != '' && (
                <PasswordArea onLongPress={() => copyPasswor()}>
                    <PasswordText>
                        {password}
                    </PasswordText>
                </PasswordArea>
            )}    
        </Container>
    );
}