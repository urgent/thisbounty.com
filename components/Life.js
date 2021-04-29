import React from "react";
import { Icon, Tooltip } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default ({ level = 0, damage }) => {
  const health = parseInt(level) + 3 - damage.length;

  return (
    <>
      {Array.from(Array(health), (_, i) => (
        <Icon data-cy={`life`} as={FaHeart} key={i} color="red.500" w="4" />
      ))}
      {damage.map((hurt, i) => (
        <Tooltip
          label={hurt}
          aria-label={`Hurt damage ${i}`}
          shouldWrapChildren={true}
        >
          <Icon
            data-cy={`damage`}
            as={FaRegHeart}
            key={`damage-${i}`}
            color="red.500"
            w="4"
          />
        </Tooltip>
      ))}
    </>
  );
};
