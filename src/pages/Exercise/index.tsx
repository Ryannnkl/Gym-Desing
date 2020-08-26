import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

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
  const [data, setData] = useState([]);
  const { params } = useRoute();

  useEffect(() => {
    const json = requre(`../../resources/${params.arq}`);
    setData(json);
  }, []);

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
            <ContentJobText>{item.job}</ContentJobText>
            <ContentJobSeries>{item.series}</ContentJobSeries>
          </ContentTextContainer>
          <ContentMarkButton style={{ opacity: 0.5 }}>
            <Feather
              name={item.selected ? "check-circle" : "circle"}
              size={30}
              color={item.selected ? "#90ff64" : "#777"}
            />
          </ContentMarkButton>
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
