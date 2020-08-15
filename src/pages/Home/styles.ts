import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const SearchContent = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: 60px;
`;

export const SearchItem = styled.TouchableOpacity`
  padding: 5px;
  margin: 5px 10px;
`;

export const SearchText = styled.Text`
  border-radius: 20px;
  color: #333;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 10px 15px;
`;

export const CardItem = styled.TouchableOpacity`
  width: 140px;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-width: ${0.2}px;
  border-color: #777;
`;

export const CardIcon = styled.Image`
  width: 120px;
  height: 120px;
`;

export const CardText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
