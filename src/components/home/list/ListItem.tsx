import React from "react";

import { Character, StackNavigation } from "../../../types";
import { Avatar, Container, Name } from "./styles";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

type ListItemProps = {
  item: Character;
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigate("Details", { character: item })}
    >
      <Container>
        <Avatar
          source={{ uri: item.thumbnail }}
          sharedTransitionTag={`avatar${String(item.id)}`}
        />
        <Name sharedTransitionTag={`name${String(item.id)}`}>{item.name}</Name>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;
