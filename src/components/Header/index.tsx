import React from "react";
import { Alert } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderTop>
        <BorderlessButton
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() =>
            icon.name == "activity"
              ? Alert.alert("em testes", "asjdhsah")
              : navigation.goBack()
          }
        >
          <Feather name={icon.name} size={26} color={icon.color} />
        </BorderlessButton>
        <BorderlessButton
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => Alert.alert("não sei pra que serve")}
        >
          <Feather name="command" size={26} color={icon.color} />
        </BorderlessButton>
      </HeaderTop>
      <HeaderContent>
        <HeaderText style={{ color: icon.color }}>{title}</HeaderText>
      </HeaderContent>
      {children}
    </Container>
  );
};

export default Header;
