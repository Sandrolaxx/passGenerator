import styled from "styled-components/native";
import SliderReact from "@react-native-community/slider";

export const SliderContainer = styled.View`
  width: 80%;
  border-radius: 8px;
  margin: 15px 0px;
  background-color: #FFFDDD;
`;

export const SliderText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const SliderComponent = styled(SliderReact)`
    height: 50px;
`