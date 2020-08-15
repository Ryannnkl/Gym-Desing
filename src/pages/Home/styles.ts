import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const CardItem = styled.TouchableOpacity`
  width: 40%;
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
`;

export const CardIcon = styled.Image`
  width: 100px;
`;

export const CardText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
