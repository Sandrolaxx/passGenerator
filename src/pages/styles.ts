import { Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #D1D1D1;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
`;

export const ImageLogo = styled(Image)`
    margin-bottom: 56px;
`
export const PasswordArea = styled.Pressable`
    width: 80%;
    height: 50px;
    border-radius: 8px;
    margin: 32px 0px;
    align-items: center;
    justify-content: center;
    background-color: #FFFDDD;
`

export const PasswordText = styled.Text`
    padding: 10px;
    text-align: center;
    font-size: 18px;
`