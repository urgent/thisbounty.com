import React from "react";
import { Text, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export default ({ amount }) => {
  if (!amount) {
    return (
      <Text data-cy={`life`} fontSize="xs">
        -
      </Text>
    );
  } else {
    return Array.from(Array(amount), (_, i) => (
      <Icon data-cy={`life`} as={FaHeart} key={i} color="red.500" w="4" />
    ));
  }
};
