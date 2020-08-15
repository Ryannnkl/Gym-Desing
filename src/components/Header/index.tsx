import React from "react";
import { View, Alert } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

interface IHeaderProps {
  title: string;
  icon: {
    name: string;
    color: string;
  };
}

import { Container, HeaderTop, HeaderContent, HeaderText } from "./styles";

const Header: React.FC<IHeaderProps> = ({ title, icon, children }) => {
  return (
    <Container>
      <HeaderTop>
        <BorderlessButton onPress={() => Alert.alert("em testes")}>
          <Feather name={icon.name} size={24} color={icon.color} />
        </BorderlessButton>
        <BorderlessButton>
          <Feather name="command" size={24} color={icon.color} />
        </BorderlessButton>
      </HeaderTop>
      <HeaderContent>
        <HeaderText>{title}</HeaderText>
      </HeaderContent>
      {children}
    </Container>
  );
};

export default Header;
