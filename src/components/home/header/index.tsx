import React, { useEffect, useState } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import {
  CompanyName,
  Container,
  Content,
  Marvel,
  SearchContainer,
  SearchInput,
  Teste,
} from "./styles";

import useDebounce from "../../../hooks/useDebounce";

type HeaderProps = {
  scrolledValue: Animated.SharedValue<number>;
  onSearch(q: string): void;
};

const _MAX_HEIGHT = 200;
const _MIN_HEIGHT = 140;
const _START_ANIMATION_AT = 80;
const _INITIAL_SCROLL_VALUE = 0;

const inputRange = [_INITIAL_SCROLL_VALUE, _START_ANIMATION_AT];
const outputRange = [_MAX_HEIGHT, _MIN_HEIGHT];

const Header: React.FC<HeaderProps> = ({ scrolledValue, onSearch }) => {
  const [search, setSearch] = useState("");

  const headerAnimated = useAnimatedStyle(() => {
    const height = interpolate(
      scrolledValue.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP
    );

    return {
      height,
    };
  });

  const searchAnimation = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrolledValue.value,
      inputRange,
      [0, 200],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrolledValue.value,
      inputRange,
      [1, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateX }],
      opacity,
    };
  });

  const debouncedQuery = useDebounce({ value: search, delay: 500 });

  useEffect(() => {
    if (!debouncedQuery) {
      onSearch("");
    }
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  return (
    <Container style={headerAnimated}>
      <Content>
        <Teste>
          <Marvel>Marvel Heroes</Marvel>
          <CompanyName>Objective - João Vitor Falco</CompanyName>
        </Teste>
        <SearchContainer style={searchAnimation}>
          <SearchInput
            onChangeText={setSearch}
            value={search}
            placeholder="Search"
          />
        </SearchContainer>
      </Content>
    </Container>
  );
};

export default Header;
