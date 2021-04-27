import React from "react";
import { Grid, Image, Text, Box } from "@chakra-ui/react";
import Life from "./Life";

export default function Bounty({ slug, img, title, life }) {
  return (
    <Grid
      data-cy={`bounty-${slug}`}
      templateColumns="[image] 2fr [stats] 3fr"
      w={300}
      my={1}
    >
      <Image
        data-cy={`bounty-${slug}-image`}
        src={img}
        sx={{ gridColumn: "image" }}
      />
      <Grid gridColumn="stats" templateRows="[title] 1em [life] 1em" ml={2}>
        <Text
          data-cy={`bounty-${slug}-title`}
          as="h3"
          sx={{ gridRow: "title" }}
          fontSize="xs"
        >
          {title}
        </Text>
        <Box sx={{ gridRow: "life" }}>
          <Life amount={life} />
        </Box>
      </Grid>
    </Grid>
  );
}
