import React from "react";
import { Grid, Image, Text, Box } from "@chakra-ui/react";
import Life from "./Life";
import Link from "next/link";

export default function Bounty({ id, img, title, damage, level, child }) {
  if (child?.length) {
    return (
      <Link href={`/bounty/${id}`}>
        <View
          id={id}
          img={img}
          title={title}
          damage={damage}
          level={level}
          cursor="pointer"
        />
      </Link>
    );
  } else {
    return (
      <View
        id={id}
        img={img}
        title={title}
        damage={damage}
        level={level}
        cursor="default"
      />
    );
  }
}

const View = React.forwardRef(
  ({ onClick, id, img, title, damage, level, cursor, key }, ref) => {
    return (
      <Grid
        data-cy={`bounty-${id}`}
        templateColumns="[image] 2fr [stats] 3fr"
        w={300}
        h={140}
        my={1}
        sx={{ cursor: cursor }}
        onClick={onClick}
        ref={ref}
        key={key}
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
);
