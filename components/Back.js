import React from "react";
import { Grid, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Back({ href, text, id }) {
  return (
    <Box
      borderY="55px solid transparent"
      borderRight="20px solid"
      borderRightColor={"brand.400"}
      cursor="pointer"
      height="130px"
    >
      <Link href={href}>
        <Text
          data-cy={`back-${id}`}
          fontSize="xs"
          position="absolute"
          transform="rotate(-90deg)"
          fontWeight="bold"
        >
          {text}
        </Text>
      </Link>
    </Box>
  );
}
