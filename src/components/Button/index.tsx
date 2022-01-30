import React from "react";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps {
    onPress: Function;
    bgColor: string;
    title: string;
}

export default function Button({ onPress, bgColor, title }: ButtonProps) {
    return (
        <ButtonContainer onPress={onPress} bgColor={bgColor}>
          <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
}