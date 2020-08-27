import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContentWork = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  min-width: 90%;
  background-color: #fff;
`;

export const ContentItem = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  border-bottom-width: ${0.3}px;
  border-bottom-color: #ededed;
`;

export const CounterContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CounterText = styled.Text`
  color: #33333350;
  font-size: 18px;
  font-weight: bold;
`;

export const ContentTextContainer = styled.View`
  flex: 4;
  align-items: flex-start;
  justify-content: center;
  padding: 5px;
`;

export const ContentJobText = styled.Text`
  color: #ff9942;
  font-size: 16px;
  font-weight: bold;
`;

export const ContentJobSeries = styled.Text`
  color: #33333350;
  font-size: 12px;
`;

export const RestContent = styled.View`
  flex: 5;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
  background-color: #f9f9f9;
`;

export const RestMessage = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 18px;
`;

export const ContentMarkButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f350;
`;
