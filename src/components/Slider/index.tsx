import React from "react";
import { SliderContainer, SliderComponent } from "./styles";

interface Props {
    size: number;
    onChangeValue: Function;
}

export default function Slider({size, onChangeValue}: Props) {
    return (
        <SliderContainer>
            <SliderComponent
                minimumValue={6}
                maximumValue={18}
                minimumTrackTintColor={"#FF0095"}
                maximumTrackTintColor={"#E7098B"}
                thumbTintColor={"#E7098B"}
                value={size}
                onValueChange={onChangeValue}
                step={1}
            />
        </SliderContainer>
    );
}