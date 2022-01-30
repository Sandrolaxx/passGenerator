import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.bgColor};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: #F1FDDD;
`;