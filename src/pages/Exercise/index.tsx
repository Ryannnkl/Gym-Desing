import React, { useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  Container,
  ContentItem,
  ContentWork,
  ContentTextContainer,
  CounterContainer,
  CounterText,
  ContentJobText,
  ContentJobSeries,
  RestContent,
  RestMessage,
  ContentMarkButton,
} from "./styles";

import Header from "../../components/Header";

const Exercise: React.FC = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const route = useRoute();

  function renderListGymJobs(item: any, index: number) {
    if (item % 3 === 0) {
      return (
        <ContentItem>
          <CounterContainer>
            <CounterText>{index + 1}.</CounterText>
          </CounterContainer>
          <RestContent>
            <RestMessage>REST</RestMessage>
          </RestContent>
        </ContentItem>
      );
    } else {
      return (
        <ContentItem>
          <CounterContainer>
            <CounterText>{index + 1}.</CounterText>
          </CounterContainer>
          <ContentTextContainer>
            <ContentJobText>V-sit</ContentJobText>
            <ContentJobSeries>30 Sec</ContentJobSeries>
          </ContentTextContainer>
          <ContentMarkButton></ContentMarkButton>
        </ContentItem>
      );
    }
  }

  return (
    <Container>
      <Header
        title="Today's Workout"
        icon={{ name: "arrow-back", color: "#333" }}
      />
      <ContentWork>
        {data.map((item, index) => (
          <View key={index}>{renderListGymJobs(item, index)}</View>
        ))}
      </ContentWork>
    </Container>
  );
};

export default Exercise;
