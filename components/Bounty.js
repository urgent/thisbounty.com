import React from "react";
import { Grid, Image, Text, Box } from "@chakra-ui/react";
import Life from "./Life";

export default function Bounty({ id, img, title, damage, level }) {
  return (
    <Grid
      data-cy={`bounty-${id}`}
      templateColumns="[image] 2fr [stats] 3fr"
      w={300}
      my={1}
    >
      <Image
        data-cy={`bounty-${id}-image`}
        src={img}
        sx={{ gridColumn: "image" }}
      />
      <Grid gridColumn="stats" templateRows="[title] 1em [life] 1em" ml={2}>
        <Text
          data-cy={`bounty-${id}-title`}
          as="h3"
          sx={{ gridRow: "title" }}
          fontSize="xs"
        >
          {title}
        </Text>
        <Box sx={{ gridRow: "life" }}>
          <Life level={level} damage={damage} />
        </Box>
      </Grid>
    </Grid>
  );
}
