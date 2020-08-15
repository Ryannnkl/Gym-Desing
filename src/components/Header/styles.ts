import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  width: 120px;
  line-height: 100px;
`;
