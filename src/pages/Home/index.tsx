import React, { useState } from "react";
import { FlatList, Alert, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";

import {
  Container,
  CardIcon,
  CardItem,
  CardText,
  SearchContent,
  SearchItem,
  SearchText,
} from "./styles";

import { images, data } from "../../resource";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const [selected, setSelected] = useState([true, false, false]);
  const navigation = useNavigation();
  const select = {
    backgroundColor: "#ff9942",
    color: "#FFF",
    fontWeight: "bold",
  };

  function handleTouchLabel(index: number) {
    const aux = [false, false, false];
    aux[index] = true;
    setSelected(aux);
  }

  return (
    <>
      <StatusBar style="dark" />

      <Container>
        <Header
          title="Choose a Workout"
          icon={{ name: "activity", color: "#333" }}
        >
          <SearchContent>
            <SearchItem onPress={() => handleTouchLabel(0)}>
              <SearchText style={selected[0] ? select : {}}>
                Area of Focus
              </SearchText>
            </SearchItem>
            <SearchItem onPress={() => handleTouchLabel(1)}>
              <SearchText style={selected[1] ? select : {}}>
                Activity
              </SearchText>
            </SearchItem>
            <SearchItem onPress={() => handleTouchLabel(2)}>
              <SearchText style={selected[2] ? select : {}}>
                Intencity
              </SearchText>
            </SearchItem>
          </SearchContent>
        </Header>
        <FlatList
          data={data}
          style={{ width: "100%" }}
          contentContainerStyle={{
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          numColumns={2}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardItem
              key={item._id}
              style={{ shadowOpacity: 0 }}
              onPress={() => navigation.navigate("Exercise")}
            >
              <CardIcon source={images[item.name.toLowerCase()]} />
              <CardText>{item.name}</CardText>
            </CardItem>
          )}
        />
      </Container>
    </>
  );
};

export default Home;
