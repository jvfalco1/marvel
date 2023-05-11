import React from "react";

import {
  Avatar,
  Card,
  CardTitle,
  Container,
  Content,
  Description,
  Name,
  Row,
} from "./styles";
import useDetail from "../../hooks/useDetail";

const Detail: React.FC = () => {
  const {
    states: { character },
  } = useDetail();
  return (
    <Container>
      <Avatar
        source={{
          uri: character.thumbnail,
        }}
        sharedTransitionTag={`avatar${String(character.id)}`}
      />
      <Name sharedTransitionTag={`name${String(character.id)}`}>
        {character.name}
      </Name>
      <Content>
        <Row>
          <Card>
            <Description>{character.events.available}</Description>
            <CardTitle>Events</CardTitle>
          </Card>

          <Card>
            <Description>{character.comics.available}</Description>
            <CardTitle>Comics</CardTitle>
          </Card>
        </Row>
        <Row>
          <Card>
            <Description>{character.series.available}</Description>
            <CardTitle>Series</CardTitle>
          </Card>
          <Card>
            <Description>{character.stories.available}</Description>
            <CardTitle>stories</CardTitle>
          </Card>
        </Row>
      </Content>
    </Container>
  );
};

export default Detail;
