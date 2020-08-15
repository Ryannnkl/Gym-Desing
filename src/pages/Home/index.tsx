import React from "react";
import { FlatList, Alert } from "react-native";
import Header from "../../components/Header";

import { Container, CardItem, CardIcon, CardText } from "./styles";

const data = require("../../resource/index.json");

const Home: React.FC = () => {
  return (
    <Container>
      <Header
        title="Chose a Workout"
        icon={{ name: "activity", color: "#333" }}
      ></Header>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CardItem
            key={index}
            onPress={() =>
              Alert.alert("Testes", "devera navegar oara os exercicios")
            }
            style={{ elevation: 0 }}
          >
            <CardIcon source={item.path} />
            <CardText>{item.name}</CardText>
          </CardItem>
        )}
      />
    </Container>
  );
};

export default Home;
