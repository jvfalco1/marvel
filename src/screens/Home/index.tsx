import React from "react";
import { ActivityIndicator } from "react-native";
import useHome from "../../hooks/useHome";
import { FlashList } from "@shopify/flash-list";
import ListItem from "../../components/home/list/ListItem";

import { Container } from "./styles";
import Header from "../../components/home/header";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Character } from "../../types";

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

const Home: React.FC = () => {
  const { states, functions } = useHome();

  const scrollValue = useSharedValue(0);

  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollValue.value = event.contentOffset.y;
    },
  });

  return (
    <Container>
      <Header scrolledValue={scrollValue} onSearch={functions.handleSearch} />

      <AnimatedFlashList
        contentContainerStyle={{ paddingTop: 16 }}
        keyExtractor={(item) => (item as Character).name}
        data={states.characters}
        onScroll={handler}
        renderItem={({ item }) => <ListItem item={item as Character} />}
        onEndReachedThreshold={0.5}
        onEndReached={functions.fetchNextPage}
        ListFooterComponent={() =>
          states.isFetchingNextPage ? <ActivityIndicator /> : null
        }
        estimatedItemSize={130}
      />
    </Container>
  );
};

export default Home;
