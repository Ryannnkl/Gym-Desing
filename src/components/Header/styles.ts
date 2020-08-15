import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const HeaderText = styled.Text`
  font-size: 40px;
  font-weight: 700;
  width: 170px;
`;
